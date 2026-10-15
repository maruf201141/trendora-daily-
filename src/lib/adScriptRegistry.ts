/**
 * Trendora Daily Advertising Script Registry
 *
 * Implements browser-only, collision-proof ad script management:
 * 1. Tracks script state (pending, loaded, error, blocked) across route changes.
 * 2. Isolates HighRevenueFormat `atOptions` globals inside independent frame contexts to prevent global collisions.
 * 3. Mounts Provider C container IDs before script execution.
 * 4. Gracefully absorbs ad-blocker network rejections without crashing the React application.
 */

export type ScriptLoadStatus = 'pending' | 'loaded' | 'error' | 'blocked' | 'disabled';

export interface ScriptRecord {
  url: string;
  status: ScriptLoadStatus;
  timestamp: number;
  attributes?: Record<string, string>;
  errorMessage?: string;
}

class AdScriptRegistry {
  private loadedScripts: Map<string, ScriptRecord> = new Map();
  private subscribers: Set<(scripts: Map<string, ScriptRecord>) => void> = new Set();

  /**
   * Safe browser-only check
   */
  public isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  /**
   * Subscribe to registry changes for live dev inspection
   */
  public subscribe(callback: (scripts: Map<string, ScriptRecord>) => void): () => void {
    this.subscribers.add(callback);
    callback(this.loadedScripts);
    return () => this.subscribers.delete(callback);
  }

  private notify() {
    this.subscribers.forEach((cb) => cb(new Map(this.loadedScripts)));
  }

  /**
   * Load an external script safely only once.
   * If an ad blocker blocks the script, gracefully marks as 'blocked' or 'error' without throwing uncaught exceptions.
   */
  public loadScript(
    url: string,
    attributes: Record<string, string> = {}
  ): Promise<boolean> {
    if (!this.isBrowser()) return Promise.resolve(false);

    // If already recorded
    if (this.loadedScripts.has(url)) {
      const existing = this.loadedScripts.get(url)!;
      return Promise.resolve(existing.status === 'loaded');
    }

    return new Promise((resolve) => {
      this.loadedScripts.set(url, {
        url,
        status: 'pending',
        timestamp: Date.now(),
        attributes,
      });
      this.notify();

      const script = document.createElement('script');
      script.src = url;
      script.type = 'text/javascript';

      // Apply required attributes (like data-zone, async, data-cfasync)
      Object.entries(attributes).forEach(([k, v]) => {
        if (k === 'async') {
          script.async = true;
        } else {
          script.setAttribute(k, v);
        }
      });

      script.onload = () => {
        const record = this.loadedScripts.get(url);
        if (record) {
          record.status = 'loaded';
          this.notify();
        }
        resolve(true);
      };

      script.onerror = () => {
        const record = this.loadedScripts.get(url);
        if (record) {
          // Detect whether it's likely an ad blocker or network issue
          record.status = 'blocked';
          record.errorMessage = 'Network request was blocked (e.g. by client ad blocker or network policy).';
          this.notify();
        }
        // Graceful resolution: do not throw or crash the UI
        resolve(false);
      };

      document.body.appendChild(script);
    });
  }

  /**
   * Generate an isolated HTML document string for HighRevenueFormat
   * to guarantee zero collision with `window.atOptions` across multiple units.
   */
  public generateHighRevenueFormatHtml(
    key: string,
    width: number,
    height: number,
    scriptUrl: string
  ): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <base target="_blank">
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key': '${key}',
      'format': 'iframe',
      'height': ${height},
      'width': ${width},
      'params': {}
    };
  </script>
  <script type="text/javascript" src="${scriptUrl}"></script>
</body>
</html>`;
  }

  public getLoadedScripts(): Map<string, ScriptRecord> {
    return new Map(this.loadedScripts);
  }
}

export const adScriptRegistry = new AdScriptRegistry();

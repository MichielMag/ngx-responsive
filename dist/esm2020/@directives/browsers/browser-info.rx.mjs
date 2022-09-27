/**
 * @name browser-info.rx
 * @description Browser info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { BrowserInfo } from './browser-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class BrowserInfoRx extends BrowserInfo {
    constructor(_responsiveState, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
    }
}
BrowserInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: BrowserInfoRx, deps: [{ token: i1.ResponsiveState }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Injectable });
BrowserInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: BrowserInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: BrowserInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i2.PlatformService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1pbmZvLnJ4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0BkaXJlY3RpdmVzL2Jyb3dzZXJzL2Jyb3dzZXItaW5mby5yeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSTdDLE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBVztJQUMxQyxZQUNXLGdCQUFpQyxFQUN4QyxlQUFnQztRQUNoQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFGbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtJQUVFLENBQUM7OzBHQUp0QyxhQUFhOzhHQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbmFtZSBicm93c2VyLWluZm8ucnhcclxuICogQGRlc2NyaXB0aW9uIEJyb3dzZXIgaW5mbyByZWFjdGl2ZSBzZXJ2aWNlIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTdGF0ZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLXN0YXRlL3Jlc3BvbnNpdmUtc3RhdGUnO1xyXG5pbXBvcnQgeyBCcm93c2VySW5mbyB9IGZyb20gJy4vYnJvd3Nlci1pbmZvJztcclxuaW1wb3J0IHsgUGxhdGZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3BsYXRmb3JtLXNlcnZpY2UvcGxhdGZvcm0uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VySW5mb1J4IGV4dGVuZHMgQnJvd3NlckluZm8gIHtcclxuICAgIGNvbnN0cnVjdG9yKCBcclxuICAgICAgICBwdWJsaWMgX3Jlc3BvbnNpdmVTdGF0ZTogUmVzcG9uc2l2ZVN0YXRlLFxyXG4gICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICApIHsgc3VwZXIoX3Jlc3BvbnNpdmVTdGF0ZSwgcGxhdGZvcm1TZXJ2aWNlKTsgfVxyXG59XHJcbiJdfQ==
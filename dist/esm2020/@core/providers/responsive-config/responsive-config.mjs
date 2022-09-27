/**
 * @name responsive-config
 * @description Core responsive-config provider in ngx-responsive
 *
 * @license MIT
 */
import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export class ResponsiveConfig {
    constructor(_config) {
        this._config = _config;
        this.config = this._config;
    }
}
ResponsiveConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveConfig, deps: [{ token: 'config' }], target: i0.ɵɵFactoryTarget.Injectable });
ResponsiveConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveConfig });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveConfig, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtY29uZmlnL3Jlc3BvbnNpdmUtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7O0FBSTdELE1BQU0sT0FBTyxnQkFBZ0I7SUFFekIsWUFBc0MsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7OzZHQUpRLGdCQUFnQixrQkFFTCxRQUFRO2lIQUZuQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVTs7MEJBR00sTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIHJlc3BvbnNpdmUtY29uZmlnXHJcbiAqIEBkZXNjcmlwdGlvbiBDb3JlIHJlc3BvbnNpdmUtY29uZmlnIHByb3ZpZGVyIGluIG5neC1yZXNwb25zaXZlXHJcbiAqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcmVzcG9uc2l2ZS1jb25maWcuaW50ZXJmYWNlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlQ29uZmlnIHtcclxuICAgIHB1YmxpYyBjb25maWc6IElSZXNwb25zaXZlQ29uZmlnO1xyXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBfY29uZmlnPzogSVJlc3BvbnNpdmVDb25maWcpIHtcclxuICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5fY29uZmlnO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
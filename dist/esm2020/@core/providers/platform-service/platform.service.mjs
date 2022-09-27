import { Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { ResponsiveConfig } from '../responsive-config/responsive-config';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../responsive-config/responsive-config";
export class PlatformService {
    constructor(_platformId, responsiveConfig) {
        this._platformId = _platformId;
        this.responsiveConfig = responsiveConfig;
        this.isServer = isPlatformServer(_platformId);
        this.isBrowser = isPlatformBrowser(_platformId);
    }
    isEnabledForPlatform() {
        return this.isBrowser || this.responsiveConfig.config.renderOnServer;
    }
}
PlatformService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: PlatformService, deps: [{ token: PLATFORM_ID }, { token: ResponsiveConfig }], target: i0.ɵɵFactoryTarget.Injectable });
PlatformService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: PlatformService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: PlatformService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i1.ResponsiveConfig, decorators: [{
                    type: Inject,
                    args: [ResponsiveConfig]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AY29yZS9wcm92aWRlcnMvcGxhdGZvcm0tc2VydmljZS9wbGF0Zm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBR3RFLE1BQU0sT0FBTyxlQUFlO0lBSzFCLFlBQ3dDLFdBQVcsRUFDZixnQkFBa0M7UUFEOUIsZ0JBQVcsR0FBWCxXQUFXLENBQUE7UUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRXBFLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sb0JBQW9CO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2RSxDQUFDOzs0R0FmVSxlQUFlLGtCQU1oQixXQUFXLGFBQ1gsZ0JBQWdCO2dIQVBmLGVBQWU7MkZBQWYsZUFBZTtrQkFEM0IsVUFBVTs7MEJBT04sTUFBTTsyQkFBQyxXQUFXOzswQkFDbEIsTUFBTTsyQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IEluamVjdCwgUExBVEZPUk1fSUQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4uL3Jlc3BvbnNpdmUtY29uZmlnL3Jlc3BvbnNpdmUtY29uZmlnJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1TZXJ2aWNlIHtcclxuXHJcbiAgaXNTZXJ2ZXI6IGJvb2xlYW47XHJcbiAgaXNCcm93c2VyOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgX3BsYXRmb3JtSWQsXHJcbiAgICBASW5qZWN0KFJlc3BvbnNpdmVDb25maWcpIHByaXZhdGUgcmVzcG9uc2l2ZUNvbmZpZzogUmVzcG9uc2l2ZUNvbmZpZ1xyXG4gICkge1xyXG4gICAgdGhpcy5pc1NlcnZlciA9IGlzUGxhdGZvcm1TZXJ2ZXIoX3BsYXRmb3JtSWQpO1xyXG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihfcGxhdGZvcm1JZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFbmFibGVkRm9yUGxhdGZvcm0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0Jyb3dzZXLCoHx8IHRoaXMucmVzcG9uc2l2ZUNvbmZpZy5jb25maWcucmVuZGVyT25TZXJ2ZXI7XHJcbiAgfVxyXG59Il19
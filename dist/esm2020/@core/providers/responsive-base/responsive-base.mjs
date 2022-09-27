/**
 * @name responsive-config
 * @description Core responsive-config provider in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Injectable, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../responsive-state/responsive-state";
import * as i2 from "../platform-service/platform.service";
export class RESPONSIVE_BASE {
    constructor(templateRef, viewContainer, _responsiveState, cd, platformService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this.platformService = platformService;
        this._noRepeat = 0;
        this.set_active_subscriptions = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this.eventChanges = new EventEmitter();
        this._isEnabledForPlatform = this.platformService.isEnabledForPlatform();
    }
    setGrid(grid_state, directive) {
        switch (directive) {
            case 'bootstrap':
                this.set_active_subscriptions.bootstrap = true;
                break;
            case 'device':
                this.set_active_subscriptions.device = true;
                break;
            case 'standard':
                this.set_active_subscriptions.standard = true;
                break;
            case 'orientation':
                this.set_active_subscriptions.orientation = true;
                break;
            case 'browser':
                this.set_active_subscriptions.browser = true;
                break;
            case 'pixelratio':
                this.set_active_subscriptions.pixelratio = true;
                break;
            case 'ie':
                this.set_active_subscriptions.ie = true;
                break;
            case 'sizes':
                this.set_active_subscriptions.sizes = true;
                break;
        }
        if (directive === 'sizes') {
            this._sizes_grid_state = grid_state;
        }
        else {
            this._others_grid_state = (Array.isArray(grid_state) ? grid_state : [grid_state]);
        }
        this._directive = directive;
    }
    ngOnInit() {
        if (this._isEnabledForPlatform) {
            if (this.set_active_subscriptions.bootstrap) {
                this._subscription_Bootstrap = this._responsiveState.elemento$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.browser) {
                this._subscription_Browser = this._responsiveState.browser$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.device) {
                this._subscription_Device = this._responsiveState.device$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.pixelratio) {
                this._subscription_Pixel_Ratio = this._responsiveState.pixel$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.orientation) {
                this._subscription_Orientation = this._responsiveState.orientation$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.standard) {
                this._subscription_Standard = this._responsiveState.standard$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.ie) {
                this._subscription_IE_Version = this._responsiveState.ieVersion$.subscribe(this.updateView.bind(this));
            }
            if (this.set_active_subscriptions.sizes) {
                this._subscription_custom_sizes = this._responsiveState.ancho$.subscribe(this.updateView.bind(this));
            }
        }
    }
    ngOnDestroy() {
        if (this._isEnabledForPlatform) {
            if (this.set_active_subscriptions.bootstrap) {
                this._subscription_Bootstrap.unsubscribe();
            }
            if (this.set_active_subscriptions.browser) {
                this._subscription_Browser.unsubscribe();
            }
            if (this.set_active_subscriptions.device) {
                this._subscription_Device.unsubscribe();
            }
            if (this.set_active_subscriptions.pixelratio) {
                this._subscription_Pixel_Ratio.unsubscribe();
            }
            if (this.set_active_subscriptions.orientation) {
                this._subscription_Orientation.unsubscribe();
            }
            if (this.set_active_subscriptions.standard) {
                this._subscription_Standard.unsubscribe();
            }
            if (this.set_active_subscriptions.ie) {
                this._subscription_IE_Version.unsubscribe();
            }
            if (this.set_active_subscriptions.sizes) {
                this._subscription_custom_sizes.unsubscribe();
            }
        }
    }
    showHide(show) {
        if (this._isEnabledForPlatform) {
            if (show) {
                if (this._noRepeat === 0) {
                    this._noRepeat = 1;
                    this.eventChanges.emit(true);
                    this.viewContainer.createEmbeddedView(this.templateRef);
                    this.cd.markForCheck();
                }
            }
            else {
                this._noRepeat = 0;
                this.eventChanges.emit(false);
                this.viewContainer.clear();
                this.cd.markForCheck();
            }
        }
    }
    updateView(value) {
        const showBoolean = this._directive === 'sizes' ?
            ((typeof this._sizes_grid_state.min === 'undefined' || value >= this._sizes_grid_state.min) &&
                (typeof this._sizes_grid_state.max === 'undefined' || value <= this._sizes_grid_state.max)) :
            !!this._others_grid_state && this._others_grid_state.indexOf(value) !== -1;
        this.showHide(this._showWhenTrue ? showBoolean : !showBoolean);
    }
}
RESPONSIVE_BASE.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: RESPONSIVE_BASE, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.ResponsiveState }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Injectable });
RESPONSIVE_BASE.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: RESPONSIVE_BASE });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: RESPONSIVE_BASE, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.ResponsiveState }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL0Bjb3JlL3Byb3ZpZGVycy9yZXNwb25zaXZlLWJhc2UvcmVzcG9uc2l2ZS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUNILFlBQVksRUFNWixVQUFVLEdBQ2IsTUFBTSxlQUFlLENBQUM7Ozs7QUFPdkIsTUFBTSxPQUFnQixlQUFlO0lBOEJqQyxZQUNZLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLGdCQUFpQyxFQUNqQyxFQUFxQixFQUNyQixlQUFnQztRQUpoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBakNwQyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBZ0JkLDZCQUF3QixHQUE2QjtZQUN6RCxTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsVUFBVSxFQUFFLEtBQUs7WUFDakIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEtBQUs7WUFDZixFQUFFLEVBQUUsS0FBSztZQUNULEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQWFRLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFIM0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3RSxDQUFDO0lBR1MsT0FBTyxDQUFDLFVBQWUsRUFBRSxTQUFpQjtRQUNoRCxRQUFRLFNBQVMsRUFBRTtZQUNmLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsd0JBQXdCLENBQUMsU0FBUyxHQUFH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QyxDQUFDO1lBQzdDLENBQ0ksQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEtBQUssV0FBVyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDO2dCQUMxRixDQUFDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsS0FBSyxXQUFXLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FDN0YsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRS9FLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7OzRHQWhMaUIsZUFBZTtnSEFBZixlQUFlOzJGQUFmLGVBQWU7a0JBRHBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQG5hbWUgcmVzcG9uc2l2ZS1jb25maWdcclxuICogQGRlc2NyaXB0aW9uIENvcmUgcmVzcG9uc2l2ZS1jb25maWcgcHJvdmlkZXIgaW4gbmd4LXJlc3BvbnNpdmVcclxuICpcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQge1xyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgVGVtcGxhdGVSZWYsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgT25Jbml0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBJbmplY3RhYmxlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSVJlc3BvbnNpdmVTdWJzY3JpcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTdGF0ZSB9IGZyb20gJy4uL3Jlc3BvbnNpdmUtc3RhdGUvcmVzcG9uc2l2ZS1zdGF0ZSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtU2VydmljZSB9IGZyb20gJy4uL3BsYXRmb3JtLXNlcnZpY2UvcGxhdGZvcm0uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSRVNQT05TSVZFX0JBU0U8VD4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbm9SZXBlYXQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc2l6ZXNfZ3JpZF9zdGF0ZTogYW55O1xyXG4gICAgcHJpdmF0ZSBfb3RoZXJzX2dyaWRfc3RhdGU6IHN0cmluZ1tdO1xyXG4gICAgcHJpdmF0ZSBfZGlyZWN0aXZlOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uX0Jvb3RzdHJhcDogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uX0Jyb3dzZXI6IFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbl9QaXhlbF9SYXRpbzogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uX0RldmljZTogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uX09yaWVudGF0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25fU3RhbmRhcmQ6IFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbl9JRV9WZXJzaW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25fY3VzdG9tX3NpemVzOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWU6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnM6IElSZXNwb25zaXZlU3Vic2NyaXB0aW9ucyA9IHtcclxuICAgICAgICBib290c3RyYXA6IGZhbHNlLFxyXG4gICAgICAgIGJyb3dzZXI6IGZhbHNlLFxyXG4gICAgICAgIGRldmljZTogZmFsc2UsXHJcbiAgICAgICAgcGl4ZWxyYXRpbzogZmFsc2UsXHJcbiAgICAgICAgb3JpZW50YXRpb246IGZhbHNlLFxyXG4gICAgICAgIHN0YW5kYXJkOiBmYWxzZSxcclxuICAgICAgICBpZTogZmFsc2UsXHJcbiAgICAgICAgc2l6ZXM6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBfaXNFbmFibGVkRm9yUGxhdGZvcm06IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfcmVzcG9uc2l2ZVN0YXRlOiBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5faXNFbmFibGVkRm9yUGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtU2VydmljZS5pc0VuYWJsZWRGb3JQbGF0Zm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBldmVudENoYW5nZXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgcHJvdGVjdGVkIHNldEdyaWQoZ3JpZF9zdGF0ZTogYW55LCBkaXJlY3RpdmU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jvb3RzdHJhcCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5ib290c3RyYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RldmljZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5kZXZpY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YW5kYXJkJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnN0YW5kYXJkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdvcmllbnRhdGlvbic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5vcmllbnRhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYnJvd3Nlcic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5icm93c2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwaXhlbHJhdGlvJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnBpeGVscmF0aW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2llJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLmllID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaXplcyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5zaXplcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaXJlY3RpdmUgPT09ICdzaXplcycpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZXNfZ3JpZF9zdGF0ZSA9IGdyaWRfc3RhdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb3RoZXJzX2dyaWRfc3RhdGUgPSA8c3RyaW5nW10+KEFycmF5LmlzQXJyYXkoZ3JpZF9zdGF0ZSkgPyBncmlkX3N0YXRlIDogW2dyaWRfc3RhdGVdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aXZlID0gZGlyZWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNFbmFibGVkRm9yUGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLmJvb3RzdHJhcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uX0Jvb3RzdHJhcCA9IHRoaXMuX3Jlc3BvbnNpdmVTdGF0ZS5lbGVtZW50byQuc3Vic2NyaWJlKHRoaXMudXBkYXRlVmlldy5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5icm93c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fQnJvd3NlciA9IHRoaXMuX3Jlc3BvbnNpdmVTdGF0ZS5icm93c2VyJC5zdWJzY3JpYmUodGhpcy51cGRhdGVWaWV3LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbl9EZXZpY2UgPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUuZGV2aWNlJC5zdWJzY3JpYmUodGhpcy51cGRhdGVWaWV3LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMucGl4ZWxyYXRpbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uX1BpeGVsX1JhdGlvID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLnBpeGVsJC5zdWJzY3JpYmUodGhpcy51cGRhdGVWaWV3LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMub3JpZW50YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbl9PcmllbnRhdGlvbiA9IHRoaXMuX3Jlc3BvbnNpdmVTdGF0ZS5vcmllbnRhdGlvbiQuc3Vic2NyaWJlKHRoaXMudXBkYXRlVmlldy5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnN0YW5kYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fU3RhbmRhcmQgPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUuc3RhbmRhcmQkLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVZpZXcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5pZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uX0lFX1ZlcnNpb24gPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUuaWVWZXJzaW9uJC5zdWJzY3JpYmUodGhpcy51cGRhdGVWaWV3LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuc2l6ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbl9jdXN0b21fc2l6ZXMgPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUuYW5jaG8kLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVZpZXcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0VuYWJsZWRGb3JQbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuYm9vdHN0cmFwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fQm9vdHN0cmFwLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5icm93c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fQnJvd3Nlci51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fRGV2aWNlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5waXhlbHJhdGlvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fUGl4ZWxfUmF0aW8udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLm9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fT3JpZW50YXRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnN0YW5kYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fU3RhbmRhcmQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLmllKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fSUVfVmVyc2lvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuc2l6ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbl9jdXN0b21fc2l6ZXMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dIaWRlKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faXNFbmFibGVkRm9yUGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub1JlcGVhdCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vUmVwZWF0ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50Q2hhbmdlcy5lbWl0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vUmVwZWF0ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRDaGFuZ2VzLmVtaXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVmlldyh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2hvd0Jvb2xlYW4gPSB0aGlzLl9kaXJlY3RpdmUgPT09ICdzaXplcycgP1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAodHlwZW9mIHRoaXMuX3NpemVzX2dyaWRfc3RhdGUubWluID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA+PSB0aGlzLl9zaXplc19ncmlkX3N0YXRlLm1pbikgJiZcclxuICAgICAgICAgICAgICAgICh0eXBlb2YgdGhpcy5fc2l6ZXNfZ3JpZF9zdGF0ZS5tYXggPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlIDw9IHRoaXMuX3NpemVzX2dyaWRfc3RhdGUubWF4KVxyXG4gICAgICAgICAgICApIDpcclxuICAgICAgICAgICAgISF0aGlzLl9vdGhlcnNfZ3JpZF9zdGF0ZSAmJiB0aGlzLl9vdGhlcnNfZ3JpZF9zdGF0ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0hpZGUodGhpcy5fc2hvd1doZW5UcnVlID8gc2hvd0Jvb2xlYW4gOiAhc2hvd0Jvb2xlYW4pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
/**
 * @name responsive
 * @description Responsive directive in ngx-responsive
 *
 * @license MIT
 */
import { Output, EventEmitter, Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class ResponsiveDirective {
    constructor(templateRef, _responsiveState, viewContainer, cd, platformService) {
        this.templateRef = templateRef;
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.changes = new EventEmitter();
        this._windows = null;
        this._window = null;
        this._isEnabledForPlatform = null;
        this.set_values = {
            bootstrap: '',
            browser: '',
            device: '',
            pixelratio: '',
            orientation: '',
            standard: '',
            ie: '',
            sizes: 0
        };
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
        this.match_multiple = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this._showWhenTrue = true;
        this._globalNoRepeat = 0;
        this._bootstrapNoRepeat = 0;
        this._deviceNoRepeat = 0;
        this._standardNoRepeat = 0;
        this._orientationNoRepeat = 0;
        this._browserNoRepeat = 0;
        this._pixelratioNoRepeat = 0;
        this._ieNoRepeat = 0;
        this._sizesNoRepeat = 0;
        this._bootstrap_user_param = [];
        this._devices_user_param = [];
        this._standard_user_param = [];
        this._orientation_user_param = [];
        this._browser_user_param = [];
        this._pixelratio_user_param = [];
        this._ie_user_param = [];
        this._sizes_user_param = [0, Number.MAX_VALUE];
        this._sizes_window = 'window';
        // private _sizes_container = null;
        this._actives = [];
        this._isEnabledForPlatform = platformService.isEnabledForPlatform();
    }
    set responsive(config) {
        this._config = config;
        this.init_responsive();
    }
    get config() {
        return this._config;
    }
    set responsiveContainer(value) {
        this._responsiveContainer = value;
        if (this.config) {
            if (this._sizes_window !== null && this._sizes_window !== "window") {
                throw new Error('Responsive directive cannot use window AND responsiveContainer together');
            }
            this.init_responsive();
        }
    }
    get responsiveContainer() {
        return this._responsiveContainer;
    }
    init_responsive() {
        const config = this.config;
        if (this.isJSON(config)) {
            if (!!config.bootstrap && this._bootstrapNoRepeat === 0) {
                this._bootstrap_user_param = (Array.isArray(config.bootstrap) ? config.bootstrap : [config.bootstrap]);
                this._bootstrapNoRepeat = 1;
                this.set_active_subscriptions.bootstrap = true;
            }
            if (!!config.device && this._deviceNoRepeat === 0) {
                this._devices_user_param = (Array.isArray(config.device) ? config.device : [config.device]);
                this._deviceNoRepeat = 1;
                this.set_active_subscriptions.device = true;
            }
            if (!!config.standard && this._standardNoRepeat === 0) {
                this._standard_user_param = (Array.isArray(config.standard) ? config.standard : [config.standard]);
                this._standardNoRepeat = 1;
                this.set_active_subscriptions.standard = true;
            }
            if (!!config.orientation && this._orientationNoRepeat === 0) {
                this._orientation_user_param = (Array.isArray(config.orientation) ? config.orientation : [config.orientation]);
                this._orientationNoRepeat = 1;
                this.set_active_subscriptions.orientation = true;
            }
            if (!!config.browser && this._browserNoRepeat === 0) {
                this._browser_user_param = (Array.isArray(config.browser) ? config.browser : [config.browser]);
                this._browserNoRepeat = 1;
                this.set_active_subscriptions.browser = true;
            }
            if (!!config.pixelratio && this._pixelratioNoRepeat === 0) {
                this._pixelratio_user_param = (Array.isArray(config.pixelratio) ? config.pixelratio : [config.pixelratio]);
                this._pixelratioNoRepeat = 1;
                this.set_active_subscriptions.pixelratio = true;
            }
            if (!!config.ie && this._ieNoRepeat === 0) {
                this._ie_user_param = (Array.isArray(config.ie) ? config.ie : [config.ie]);
                this._ieNoRepeat = 1;
                this.set_active_subscriptions.ie = true;
            }
            if (!!config.sizes && this._sizesNoRepeat === 0) {
                const _min = config.sizes.min || 0;
                const _max = config.sizes.max || Number.MAX_VALUE;
                const _win = config.sizes.window;
                if (_win !== undefined) {
                    this._sizes_window = _win;
                }
                // this._sizes_container = value.sizes.container;
                this._sizes_user_param = [_min, _max];
                this._sizesNoRepeat = 1;
                this.set_active_subscriptions.sizes = true;
            }
        }
        else if (Array.isArray(config)) {
            throw new Error('Responsive directive don´t work with a only array parameter');
        }
        else if (typeof config === 'string') {
            throw new Error('Responsive directive don´t work with a only string parameter');
        }
        else if (typeof config === 'number') {
            throw new Error('Responsive directive don´t work with a only number parameter');
        }
        else if (typeof config === 'undefined' || config === null) {
            throw new Error('Responsive directive don´t work without a param');
        }
        for (let key in this.set_active_subscriptions) {
            if (this.set_active_subscriptions[key]) {
                this._actives.push(key);
            }
        }
        if (this._isEnabledForPlatform) {
            if (this.set_active_subscriptions.bootstrap) {
                this._subscription_Bootstrap = this._responsiveState.elemento$.subscribe(this.updateBootstrap.bind(this));
            }
            if (this.set_active_subscriptions.browser) {
                this._subscription_Browser = this._responsiveState.browser$.subscribe(this.updateBrowser.bind(this));
            }
            if (this.set_active_subscriptions.device) {
                this._subscription_Device = this._responsiveState.device$.subscribe(this.updateDevice.bind(this));
            }
            if (this.set_active_subscriptions.pixelratio) {
                this._subscription_Pixel_Ratio = this._responsiveState.pixel$.subscribe(this.updatePixelRatio.bind(this));
            }
            if (this.set_active_subscriptions.orientation) {
                this._subscription_Orientation = this._responsiveState.orientation$.subscribe(this.updateOrientation.bind(this));
            }
            if (this.set_active_subscriptions.standard) {
                this._subscription_Standard = this._responsiveState.standard$.subscribe(this.updateStandard.bind(this));
            }
            if (this.set_active_subscriptions.ie) {
                this._subscription_IE_Version = this._responsiveState.ieVersion$.subscribe(this.updateIEversion.bind(this));
            }
            if (this.set_active_subscriptions.sizes) {
                this._subscription_custom_sizes = this._responsiveState.ancho$.subscribe(this.updateSizes.bind(this));
            }
        }
    }
    updateBootstrap(value) {
        const _update = this._ifValueChanged(this._noRepeatBootstrapName, value);
        if (_update) {
            this.set_values.bootstrap = value;
        }
        this.updateEvent(this.set_values.bootstrap, 'bootstrap');
    }
    updateBrowser(value) {
        this.set_values.browser = value;
        this.updateEvent(this.set_values.browser, 'browser');
    }
    updateDevice(value) {
        this.set_values.device = value;
        this.updateEvent(this.set_values.device, 'device');
    }
    updatePixelRatio(value) {
        this.set_values.pixelratio = value;
        this.updateEvent(this.set_values.pixelratio, 'pixelratio');
    }
    updateOrientation(value) {
        this.set_values.orientation = value;
        this.updateEvent(this.set_values.orientation, 'orientation');
    }
    updateStandard(value) {
        this.set_values.standard = value;
        this.updateEvent(this.set_values.standard, 'standard');
    }
    updateIEversion(value) {
        this.set_values.ie = value;
        this.updateEvent(this.set_values.ie, 'ie');
    }
    updateSizes(value) {
        if (this.responsiveContainer) {
            this.set_values.sizes = this._isEnabledForPlatform ? this.responsiveContainer.getWidth() : 0;
        }
        else if (this._sizes_window) {
            this.set_values.sizes = this._responsiveState.getWidth(this._sizes_window);
        }
        else {
            this.set_values.sizes = value;
        }
        this.updateEvent(this.set_values.sizes, 'sizes');
    }
    updateEvent(param, type_directive) {
        if (!!this._showWhenTrue) {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(this._bootstrap_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'device':
                    this.showHideOperations(this._devices_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(this._standard_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(this._orientation_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(this._browser_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(this._pixelratio_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(this._ie_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations((param >= this._sizes_user_param[0] &&
                        param < this._sizes_user_param[1]), type_directive);
                    break;
            }
        }
        else {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(!(this._bootstrap_user_param.indexOf(param)), type_directive);
                    break;
                case 'device':
                    this.showHideOperations(!(this._devices_user_param.indexOf(param)), type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(!(this._standard_user_param.indexOf(param)), type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(!(this._orientation_user_param.indexOf(param)), type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(!(this._browser_user_param.indexOf(param)), type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(!(this._pixelratio_user_param.indexOf(param)), type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(!(this._ie_user_param.indexOf(param)), type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations(!((param >= this._sizes_user_param[0] &&
                        param < this._sizes_user_param[1])), type_directive);
                    break;
            }
        }
    }
    showHideOperations(show, type_directive) {
        const global_state = this.matchValues(show, type_directive);
        if (!!global_state) {
            if (this._globalNoRepeat === 0) {
                this._globalNoRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.changes.emit(true);
                this.cd.markForCheck();
            }
        }
        else {
            this._globalNoRepeat = 0;
            this.changes.emit(false);
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    }
    matchValues(show, type_directive) {
        let match = true;
        if (show) {
            this.match_multiple[type_directive] = true;
        }
        else {
            this.match_multiple[type_directive] = false;
        }
        for (let all_key in this.match_multiple) {
            for (let active of this._actives) {
                if (all_key == active && this.match_multiple[all_key] === false)
                    return match = false;
            }
        }
        return match;
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
    _ifValueChanged(oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeatBootstrapName = newValue;
            return true;
        }
    }
    isJSON(value) {
        try {
            JSON.stringify(value);
            return true;
        }
        catch (ex) {
            return false;
        }
    }
}
ResponsiveDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveDirective, deps: [{ token: i0.TemplateRef }, { token: i1.ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ResponsiveDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ResponsiveDirective, selector: "[responsive]", inputs: { responsive: "responsive", responsiveContainer: "responsiveContainer" }, outputs: { changes: "changes" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[responsive]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i1.ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { responsive: [{
                type: Input
            }], responsiveContainer: [{
                type: Input
            }], changes: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9AZGlyZWN0aXZlcy9yZXNwb25zaXZlL3Jlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErRCxNQUFNLGVBQWUsQ0FBQzs7OztBQWNwSSxNQUFNLE9BQU8sbUJBQW1CO0lBcUc1QixZQUNXLFdBQWdDLEVBQy9CLGdCQUFpQyxFQUNqQyxhQUErQixFQUMvQixFQUFxQixFQUM3QixlQUFnQztRQUp6QixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDL0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUE5RXZCLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZiwwQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFDdkMsZUFBVSxHQUF1QjtZQUNwQyxTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEVBQUU7WUFDWixFQUFFLEVBQUUsRUFBRTtZQUNOLEtBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQUVNLDZCQUF3QixHQUM1QjtZQUNJLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixVQUFVLEVBQUUsS0FBSztZQUNqQixXQUFXLEVBQUUsS0FBSztZQUNsQixRQUFRLEVBQUUsS0FBSztZQUNmLEVBQUUsRUFBRSxLQUFL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LElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQy9DO1lBRUQsSUFBSSxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDakQ7U0FDSjtJQUNMLENBQUM7SUFFTyxlQUFlLENBQUMsUUFBYSxFQUFFLFFBQWE7UUFDaEQsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsUUFBUSxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRU8sTUFBTSxDQUFDLEtBQVU7UUFDckIsSUFBSTtZQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ1QsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOztnSEFyWlEsbUJBQW1CO29HQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFKL0IsU0FBUzttQkFDTjtvQkFDSSxRQUFRLEVBQUUsY0FBYztpQkFDM0I7Nk5BSVksVUFBVTtzQkFBdEIsS0FBSztnQkFXRixtQkFBbUI7c0JBRHRCLEtBQUs7Z0JBY0ksT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbmFtZSByZXNwb25zaXZlXHJcbiAqIEBkZXNjcmlwdGlvbiBSZXNwb25zaXZlIGRpcmVjdGl2ZSBpbiBuZ3gtcmVzcG9uc2l2ZVxyXG4gKlxyXG4gKiBAbGljZW5zZSBNSVRcclxuICovXHJcbmltcG9ydCB7IE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJUmVzcG9uc2l2ZVBhdHRlcm4sIElSZXNwb25zaXZlU3Vic2NyaXB0aW9ucyB9IGZyb20gJy4uLy4uL0Bjb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtc3RhdGUvcmVzcG9uc2l2ZS1zdGF0ZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVXaW5kb3dEaXJlY3RpdmUgfSBmcm9tIFwiLi4vcmVzcG9uc2l2ZS13aW5kb3cvcmVzcG9uc2l2ZS13aW5kb3dcIjtcclxuaW1wb3J0IHsgUGxhdGZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcHJvdmlkZXJzL3BsYXRmb3JtLXNlcnZpY2UvcGxhdGZvcm0uc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKFxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiAnW3Jlc3BvbnNpdmVdJ1xyXG4gICAgfSlcclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgX2NvbmZpZzogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICBASW5wdXQoKSBzZXQgcmVzcG9uc2l2ZShjb25maWc6IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuaW5pdF9yZXNwb25zaXZlKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgY29uZmlnKCk6IHN0cmluZyB8IHN0cmluZ1tde1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEBJbnB1dCgpIHJlc3BvbnNpdmVDb250YWluZXI6IFJlc3BvbnNpdmVXaW5kb3dEaXJlY3RpdmU7XHJcbiAgICBwcml2YXRlIF9yZXNwb25zaXZlQ29udGFpbmVyOlJlc3BvbnNpdmVXaW5kb3dEaXJlY3RpdmU7XHJcbiAgICBASW5wdXQoKSBcclxuICAgIHNldCByZXNwb25zaXZlQ29udGFpbmVyKHZhbHVlOiBSZXNwb25zaXZlV2luZG93RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuX3Jlc3BvbnNpdmVDb250YWluZXIgPSB2YWx1ZTtcclxuICAgICAgaWYodGhpcy5jb25maWcpe1xyXG4gICAgICAgICAgaWYodGhpcy5fc2l6ZXNfd2luZG93ICE9PSBudWxsICYmIHRoaXMuX3NpemVzX3dpbmRvdyAhPT0gXCJ3aW5kb3dcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jlc3BvbnNpdmUgZGlyZWN0aXZlIGNhbm5vdCB1c2Ugd2luZG93IEFORCByZXNwb25zaXZlQ29udGFpbmVyIHRvZ2V0aGVyJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmluaXRfcmVzcG9uc2l2ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgcmVzcG9uc2l2ZUNvbnRhaW5lcigpOiBSZXNwb25zaXZlV2luZG93RGlyZWN0aXZle1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zaXZlQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSBjaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHByaXZhdGUgX3dpbmRvd3MgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfd2luZG93ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2lzRW5hYmxlZEZvclBsYXRmb3JtOiBib29sZWFuID0gbnVsbDtcclxuICAgIHB1YmxpYyBzZXRfdmFsdWVzOiBJUmVzcG9uc2l2ZVBhdHRlcm4gPSB7XHJcbiAgICAgICAgYm9vdHN0cmFwOiAnJyxcclxuICAgICAgICBicm93c2VyOiAnJyxcclxuICAgICAgICBkZXZpY2U6ICcnLFxyXG4gICAgICAgIHBpeGVscmF0aW86ICcnLFxyXG4gICAgICAgIG9yaWVudGF0aW9uOiAnJyxcclxuICAgICAgICBzdGFuZGFyZDogJycsXHJcbiAgICAgICAgaWU6ICcnLFxyXG4gICAgICAgIHNpemVzOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zOiBJUmVzcG9uc2l2ZVN1YnNjcmlwdGlvbnMgPVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYm9vdHN0cmFwOiBmYWxzZSxcclxuICAgICAgICAgICAgYnJvd3NlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRldmljZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHBpeGVscmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YW5kYXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgaWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaXplczogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgcHJpdmF0ZSBtYXRjaF9tdWx0aXBsZTogSVJlc3BvbnNpdmVTdWJzY3JpcHRpb25zID1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJyb3dzZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZXZpY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBwaXhlbHJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgb3JpZW50YXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGFuZGFyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGllOiBmYWxzZSxcclxuICAgICAgICAgICAgc2l6ZXM6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25fQm9vdHN0cmFwOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25fQnJvd3NlcjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uX1BpeGVsX1JhdGlvOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25fRGV2aWNlOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25fT3JpZW50YXRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbl9TdGFuZGFyZDogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uX0lFX1ZlcnNpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbl9jdXN0b21fc2l6ZXM6IFN1YnNjcmlwdGlvbjtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIF9zaG93V2hlblRydWUgPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfZ2xvYmFsTm9SZXBlYXQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbm9SZXBlYXRCb290c3RyYXBOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBfYm9vdHN0cmFwTm9SZXBlYXQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfZGV2aWNlTm9SZXBlYXQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc3RhbmRhcmROb1JlcGVhdCA9IDA7XHJcbiAgICBwcml2YXRlIF9vcmllbnRhdGlvbk5vUmVwZWF0ID0gMDtcclxuICAgIHByaXZhdGUgX2Jyb3dzZXJOb1JlcGVhdCA9IDA7XHJcbiAgICBwcml2YXRlIF9waXhlbHJhdGlvTm9SZXBlYXQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfaWVOb1JlcGVhdCA9IDA7XHJcbiAgICBwcml2YXRlIF9zaXplc05vUmVwZWF0ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9ib290c3RyYXBfdXNlcl9wYXJhbTogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgX2RldmljZXNfdXNlcl9wYXJhbTogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgX3N0YW5kYXJkX3VzZXJfcGFyYW06IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIF9vcmllbnRhdGlvbl91c2VyX3BhcmFtOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfYnJvd3Nlcl91c2VyX3BhcmFtOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfcGl4ZWxyYXRpb191c2VyX3BhcmFtOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfaWVfdXNlcl9wYXJhbTogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgX3NpemVzX3VzZXJfcGFyYW06IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgTnVtYmVyLk1BWF9WQUxVRV07XHJcbiAgICBwcml2YXRlIF9zaXplc193aW5kb3cgPSAnd2luZG93JztcclxuICAgIC8vIHByaXZhdGUgX3NpemVzX2NvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9hY3RpdmVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0PixcclxuICAgICAgICBwcml2YXRlIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2lzRW5hYmxlZEZvclBsYXRmb3JtID0gcGxhdGZvcm1TZXJ2aWNlLmlzRW5hYmxlZEZvclBsYXRmb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRfcmVzcG9uc2l2ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb25maWc6IGFueSA9IHRoaXMuY29uZmlnO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSlNPTihjb25maWcpKSB7XHJcbiAgICAgICAgICAgIGlmICghIWNvbmZpZy5ib290c3RyYXAgJiYgdGhpcy5fYm9vdHN0cmFwTm9SZXBlYXQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jvb3RzdHJhcF91c2VyX3BhcmFtID0gPHN0cmluZ1tdPihBcnJheS5pc0FycmF5KGNvbmZpZy5ib290c3RyYXApID8gY29uZmlnLmJvb3RzdHJhcCA6IFtjb25maWcuYm9vdHN0cmFwXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ib290c3RyYXBOb1JlcGVhdCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5ib290c3RyYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghIWNvbmZpZy5kZXZpY2UgJiYgdGhpcy5fZGV2aWNlTm9SZXBlYXQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RldmljZXNfdXNlcl9wYXJhbSA9IDxzdHJpbmdbXT4oQXJyYXkuaXNBcnJheShjb25maWcuZGV2aWNlKSA/IGNvbmZpZy5kZXZpY2UgOiBbY29uZmlnLmRldmljZV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGV2aWNlTm9SZXBlYXQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuZGV2aWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISFjb25maWcuc3RhbmRhcmQgJiYgdGhpcy5fc3RhbmRhcmROb1JlcGVhdCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhbmRhcmRfdXNlcl9wYXJhbSA9IDxzdHJpbmdbXT4oQXJyYXkuaXNBcnJheShjb25maWcuc3RhbmRhcmQpID8gY29uZmlnLnN0YW5kYXJkIDogW2NvbmZpZy5zdGFuZGFyZF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhbmRhcmROb1JlcGVhdCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5zdGFuZGFyZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEhY29uZmlnLm9yaWVudGF0aW9uICYmIHRoaXMuX29yaWVudGF0aW9uTm9SZXBlYXQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29yaWVudGF0aW9uX3VzZXJfcGFyYW0gPSA8c3RyaW5nW10+KEFycmF5LmlzQXJyYXkoY29uZmlnLm9yaWVudGF0aW9uKSA/IGNvbmZpZy5vcmllbnRhdGlvbiA6IFtjb25maWcub3JpZW50YXRpb25dKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29yaWVudGF0aW9uTm9SZXBlYXQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMub3JpZW50YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghIWNvbmZpZy5icm93c2VyICYmIHRoaXMuX2Jyb3dzZXJOb1JlcGVhdCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnJvd3Nlcl91c2VyX3BhcmFtID0gPHN0cmluZ1tdPihBcnJheS5pc0FycmF5KGNvbmZpZy5icm93c2VyKSA/IGNvbmZpZy5icm93c2VyIDogW2NvbmZpZy5icm93c2VyXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9icm93c2VyTm9SZXBlYXQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuYnJvd3NlciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEhY29uZmlnLnBpeGVscmF0aW8gJiYgdGhpcy5fcGl4ZWxyYXRpb05vUmVwZWF0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9waXhlbHJhdGlvX3VzZXJfcGFyYW0gPSA8c3RyaW5nW10+KEFycmF5LmlzQXJyYXkoY29uZmlnLnBpeGVscmF0aW8pID8gY29uZmlnLnBpeGVscmF0aW8gOiBbY29uZmlnLnBpeGVscmF0aW9dKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BpeGVscmF0aW9Ob1JlcGVhdCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5waXhlbHJhdGlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISFjb25maWcuaWUgJiYgdGhpcy5faWVOb1JlcGVhdCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWVfdXNlcl9wYXJhbSA9IDxzdHJpbmdbXT4oQXJyYXkuaXNBcnJheShjb25maWcuaWUpID8gY29uZmlnLmllIDogW2NvbmZpZy5pZV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWVOb1JlcGVhdCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5pZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEhY29uZmlnLnNpemVzICYmIHRoaXMuX3NpemVzTm9SZXBlYXQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IF9taW4gPSBjb25maWcuc2l6ZXMubWluIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBfbWF4ID0gY29uZmlnLnNpemVzLm1heCB8fCBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX3dpbiA9IGNvbmZpZy5zaXplcy53aW5kb3c7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3dpbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2l6ZXNfd2luZG93ID0gX3dpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX3NpemVzX2NvbnRhaW5lciA9IHZhbHVlLnNpemVzLmNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpemVzX3VzZXJfcGFyYW0gPSBbX21pbiwgX21heF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplc05vUmVwZWF0ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnNpemVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb25maWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVzcG9uc2l2ZSBkaXJlY3RpdmUgZG9uwrR0IHdvcmsgd2l0aCBhIG9ubHkgYXJyYXkgcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jlc3BvbnNpdmUgZGlyZWN0aXZlIGRvbsK0dCB3b3JrIHdpdGggYSBvbmx5IHN0cmluZyBwYXJhbWV0ZXInKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVzcG9uc2l2ZSBkaXJlY3RpdmUgZG9uwrR0IHdvcmsgd2l0aCBhIG9ubHkgbnVtYmVyIHBhcmFtZXRlcicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3VuZGVmaW5lZCcgfHwgY29uZmlnID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVzcG9uc2l2ZSBkaXJlY3RpdmUgZG9uwrR0IHdvcmsgd2l0aG91dCBhIHBhcmFtJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9pc0VuYWJsZWRGb3JQbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuYm9vdHN0cmFwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fQm9vdHN0cmFwID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLmVsZW1lbnRvJC5zdWJzY3JpYmUodGhpcy51cGRhdGVCb290c3RyYXAuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLmJyb3dzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbl9Ccm93c2VyID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLmJyb3dzZXIkLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUJyb3dzZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbl9EZXZpY2UgPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUuZGV2aWNlJC5zdWJzY3JpYmUodGhpcy51cGRhdGVEZXZpY2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5waXhlbHJhdGlvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fUGl4ZWxfUmF0aW8gPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUucGl4ZWwkLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVBpeGVsUmF0aW8uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5vcmllbnRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uX09yaWVudGF0aW9uID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLm9yaWVudGF0aW9uJC5zdWJzY3JpYmUodGhpcy51cGRhdGVPcmllbnRhdGlvbi5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnN0YW5kYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fU3RhbmRhcmQgPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUuc3RhbmRhcmQkLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVN0YW5kYXJkLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuaWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbl9JRV9WZXJzaW9uID0gdGhpcy5fcmVzcG9uc2l2ZVN0YXRlLmllVmVyc2lvbiQuc3Vic2NyaWJlKHRoaXMudXBkYXRlSUV2ZXJzaW9uLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuc2l6ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbl9jdXN0b21fc2l6ZXMgPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUuYW5jaG8kLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVNpemVzLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQm9vdHN0cmFwKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBfdXBkYXRlID0gdGhpcy5faWZWYWx1ZUNoYW5nZWQodGhpcy5fbm9SZXBlYXRCb290c3RyYXBOYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKF91cGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRfdmFsdWVzLmJvb3RzdHJhcCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50KHRoaXMuc2V0X3ZhbHVlcy5ib290c3RyYXAsICdib290c3RyYXAnKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlQnJvd3Nlcih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfdmFsdWVzLmJyb3dzZXIgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50KHRoaXMuc2V0X3ZhbHVlcy5icm93c2VyLCAnYnJvd3NlcicpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVEZXZpY2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3ZhbHVlcy5kZXZpY2UgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50KHRoaXMuc2V0X3ZhbHVlcy5kZXZpY2UsICdkZXZpY2UnKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlUGl4ZWxSYXRpbyh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfdmFsdWVzLnBpeGVscmF0aW8gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50KHRoaXMuc2V0X3ZhbHVlcy5waXhlbHJhdGlvLCAncGl4ZWxyYXRpbycpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVPcmllbnRhdGlvbih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfdmFsdWVzLm9yaWVudGF0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFdmVudCh0aGlzLnNldF92YWx1ZXMub3JpZW50YXRpb24sICdvcmllbnRhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTdGFuZGFyZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRfdmFsdWVzLnN0YW5kYXJkID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFdmVudCh0aGlzLnNldF92YWx1ZXMuc3RhbmRhcmQsICdzdGFuZGFyZCcpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVJRXZlcnNpb24odmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0X3ZhbHVlcy5pZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnQodGhpcy5zZXRfdmFsdWVzLmllLCAnaWUnKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlU2l6ZXModmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMucmVzcG9uc2l2ZUNvbnRhaW5lcil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X3ZhbHVlcy5zaXplcyA9IHRoaXMuX2lzRW5hYmxlZEZvclBsYXRmb3JtID8gdGhpcy5yZXNwb25zaXZlQ29udGFpbmVyLmdldFdpZHRoKCkgOiAwO1xyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLl9zaXplc193aW5kb3cpe1xyXG4gICAgICAgICAgICB0aGlzLnNldF92YWx1ZXMuc2l6ZXMgPSB0aGlzLl9yZXNwb25zaXZlU3RhdGUuZ2V0V2lkdGgodGhpcy5fc2l6ZXNfd2luZG93KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zZXRfdmFsdWVzLnNpemVzID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnQodGhpcy5zZXRfdmFsdWVzLnNpemVzLCAnc2l6ZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUV2ZW50KHBhcmFtOiBhbnksIHR5cGVfZGlyZWN0aXZlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoISF0aGlzLl9zaG93V2hlblRydWUpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlX2RpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm9vdHN0cmFwJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyh0aGlzLl9ib290c3RyYXBfdXNlcl9wYXJhbS5pbmRleE9mKHBhcmFtKSAhPT0gLTEsIHR5cGVfZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RldmljZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnModGhpcy5fZGV2aWNlc191c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pICE9PSAtMSwgdHlwZV9kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3RhbmRhcmQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVPcGVyYXRpb25zKHRoaXMuX3N0YW5kYXJkX3VzZXJfcGFyYW0uaW5kZXhPZihwYXJhbSkgIT09IC0xLCB0eXBlX2RpcmVjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdvcmllbnRhdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnModGhpcy5fb3JpZW50YXRpb25fdXNlcl9wYXJhbS5pbmRleE9mKHBhcmFtKSAhPT0gLTEsIHR5cGVfZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jyb3dzZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVPcGVyYXRpb25zKHRoaXMuX2Jyb3dzZXJfdXNlcl9wYXJhbS5pbmRleE9mKHBhcmFtKSAhPT0gLTEsIHR5cGVfZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3BpeGVscmF0aW8nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVPcGVyYXRpb25zKHRoaXMuX3BpeGVscmF0aW9fdXNlcl9wYXJhbS5pbmRleE9mKHBhcmFtKSAhPT0gLTEsIHR5cGVfZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2llJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIaWRlT3BlcmF0aW9ucyh0aGlzLl9pZV91c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pICE9PSAtMSwgdHlwZV9kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2l6ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVPcGVyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbSA+PSB0aGlzLl9zaXplc191c2VyX3BhcmFtWzBdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbSA8IHRoaXMuX3NpemVzX3VzZXJfcGFyYW1bMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZV9kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZV9kaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb3RzdHJhcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnMoISh0aGlzLl9ib290c3RyYXBfdXNlcl9wYXJhbS5pbmRleE9mKHBhcmFtKSksIHR5cGVfZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RldmljZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnMoISh0aGlzLl9kZXZpY2VzX3VzZXJfcGFyYW0uaW5kZXhPZihwYXJhbSkpLCB0eXBlX2RpcmVjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzdGFuZGFyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnMoISh0aGlzLl9zdGFuZGFyZF91c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pKSwgdHlwZV9kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnb3JpZW50YXRpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVPcGVyYXRpb25zKCEodGhpcy5fb3JpZW50YXRpb25fdXNlcl9wYXJhbS5pbmRleE9mKHBhcmFtKSksIHR5cGVfZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jyb3dzZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVPcGVyYXRpb25zKCEodGhpcy5fYnJvd3Nlcl91c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pKSwgdHlwZV9kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncGl4ZWxyYXRpbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnMoISh0aGlzLl9waXhlbHJhdGlvX3VzZXJfcGFyYW0uaW5kZXhPZihwYXJhbSkpLCB0eXBlX2RpcmVjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdpZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZU9wZXJhdGlvbnMoISh0aGlzLl9pZV91c2VyX3BhcmFtLmluZGV4T2YocGFyYW0pKSwgdHlwZV9kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2l6ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVPcGVyYXRpb25zKCEoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbSA+PSB0aGlzLl9zaXplc191c2VyX3BhcmFtWzBdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtIDwgdGhpcy5fc2l6ZXNfdXNlcl9wYXJhbVsxXSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlX2RpcmVjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93SGlkZU9wZXJhdGlvbnMoc2hvdzogYm9vbGVhbiwgdHlwZV9kaXJlY3RpdmU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGdsb2JhbF9zdGF0ZSA9IHRoaXMubWF0Y2hWYWx1ZXMoc2hvdywgdHlwZV9kaXJlY3RpdmUpO1xyXG4gICAgICAgIGlmICghIWdsb2JhbF9zdGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2xvYmFsTm9SZXBlYXQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dsb2JhbE5vUmVwZWF0ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZXMuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9nbG9iYWxOb1JlcGVhdCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlcy5lbWl0KGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWF0Y2hWYWx1ZXMoc2hvdzogYm9vbGVhbiwgdHlwZV9kaXJlY3RpdmU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaF9tdWx0aXBsZVt0eXBlX2RpcmVjdGl2ZV0gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hfbXVsdGlwbGVbdHlwZV9kaXJlY3RpdmVdID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBhbGxfa2V5IGluIHRoaXMubWF0Y2hfbXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYWN0aXZlIG9mIHRoaXMuX2FjdGl2ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxfa2V5ID09IGFjdGl2ZSAmJiB0aGlzLm1hdGNoX211bHRpcGxlW2FsbF9rZXldID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0VuYWJsZWRGb3JQbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuYm9vdHN0cmFwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fQm9vdHN0cmFwLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5icm93c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fQnJvd3Nlci51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fRGV2aWNlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldF9hY3RpdmVfc3Vic2NyaXB0aW9ucy5waXhlbHJhdGlvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fUGl4ZWxfUmF0aW8udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLm9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fT3JpZW50YXRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLnN0YW5kYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fU3RhbmRhcmQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0X2FjdGl2ZV9zdWJzY3JpcHRpb25zLmllKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25fSUVfVmVyc2lvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXRfYWN0aXZlX3N1YnNjcmlwdGlvbnMuc2l6ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbl9jdXN0b21fc2l6ZXMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pZlZhbHVlQ2hhbmdlZChvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKG9sZFZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9SZXBlYXRCb290c3RyYXBOYW1lID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzSlNPTih2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
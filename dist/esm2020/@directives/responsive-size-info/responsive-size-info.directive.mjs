/**
 * @name responsive-size-info.directive
 * @description Responsive Size Info directive in ngx-responsive
 *
 * @license MIT
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ResponsiveSizeInfo } from './responsive-size-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
import * as i2 from "../../@core/providers/platform-service/platform.service";
export class ResponsiveSizeInfoDirective extends ResponsiveSizeInfo {
    constructor(_responsiveState, viewContainer, cd, platformService) {
        super(_responsiveState, platformService);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.statechanges = new EventEmitter();
    }
    set responsiveSizeInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    _updateData(value) {
        this.statechanges.emit(value);
        this.cd.markForCheck();
    }
}
ResponsiveSizeInfoDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveSizeInfoDirective, deps: [{ token: i1.ResponsiveState }, { token: i0.ViewContainerRef }, { token: i0.ChangeDetectorRef }, { token: i2.PlatformService }], target: i0.ɵɵFactoryTarget.Directive });
ResponsiveSizeInfoDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.3", type: ResponsiveSizeInfoDirective, selector: "responsiveSizeInfo", inputs: { responsiveSizeInfo: "responsiveSizeInfo" }, outputs: { statechanges: "statechanges" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveSizeInfoDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'responsiveSizeInfo' }]
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i2.PlatformService }]; }, propDecorators: { responsiveSizeInfo: [{
                type: Input
            }], statechanges: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1zaXplLWluZm8uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0BkaXJlY3RpdmVzL3Jlc3BvbnNpdmUtc2l6ZS1pbmZvL3Jlc3BvbnNpdmUtc2l6ZS1pbmZvLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNILE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQTBELE1BQU0sZUFBZSxDQUFDO0FBRy9ILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSTVELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxrQkFBa0I7SUFPL0QsWUFBbUIsZ0JBQWlDLEVBQ3pDLGFBQStCLEVBQy9CLEVBQXFCLEVBQzVCLGVBQWdDO1FBQ2hDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUoxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUp0QixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTWpCLENBQUM7SUFUL0MsSUFBYSxrQkFBa0IsQ0FBQyxVQUE2QjtRQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBUUQsUUFBUTtRQUNKLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsV0FBVztRQUNQLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ1MsV0FBVyxDQUFDLEtBQVU7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDOzt3SEFyQlEsMkJBQTJCOzRHQUEzQiwyQkFBMkI7MkZBQTNCLDJCQUEyQjtrQkFEdkMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTttTUFHNUIsa0JBQWtCO3NCQUE5QixLQUFLO2dCQUdJLFlBQVk7c0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQG5hbWUgcmVzcG9uc2l2ZS1zaXplLWluZm8uZGlyZWN0aXZlXHJcbiAqIEBkZXNjcmlwdGlvbiBSZXNwb25zaXZlIFNpemUgSW5mbyBkaXJlY3RpdmUgaW4gbmd4LXJlc3BvbnNpdmVcclxuICpcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NvbnRhaW5lclJlZiwgT25Jbml0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zaXZlU3RhdGUgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcmVzcG9uc2l2ZS1zdGF0ZS9yZXNwb25zaXZlLXN0YXRlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVNpemVJbmZvIH0gZnJvbSAnLi9yZXNwb25zaXZlLXNpemUtaW5mbyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Byb3ZpZGVycy9wbGF0Zm9ybS1zZXJ2aWNlL3BsYXRmb3JtLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAncmVzcG9uc2l2ZVNpemVJbmZvJyB9KVxyXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZVNpemVJbmZvRGlyZWN0aXZlIGV4dGVuZHMgUmVzcG9uc2l2ZVNpemVJbmZvIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHVibGljIGN1cnJlbnRzdGF0ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2V0IHJlc3BvbnNpdmVTaXplSW5mbyhncmlkX3N0YXRlOiBzdHJpbmdbXSB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZURhdGEodGhpcy5jdXJyZW50c3RhdGUpO1xyXG4gICAgfVxyXG4gICAgQE91dHB1dCgpIHN0YXRlY2hhbmdlczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICBwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXHJcbiAgICApIHsgc3VwZXIoX3Jlc3BvbnNpdmVTdGF0ZSwgcGxhdGZvcm1TZXJ2aWNlKTsgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfdXBkYXRlRGF0YSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZWNoYW5nZXMuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxufVxyXG4iXX0=
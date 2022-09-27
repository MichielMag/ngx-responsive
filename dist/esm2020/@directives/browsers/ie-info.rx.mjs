/**
 * @name ie-info.rx
 * @description IE Info reactive service in ngx-responsive
 *
 * @license MIT
 */
import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { IeInfo } from './ie-info';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/providers/responsive-state/responsive-state";
export class IeInfoRx extends IeInfo {
    constructor(_responsiveState, _platformId) {
        super(_responsiveState, _platformId);
        this._responsiveState = _responsiveState;
        this._platformId = _platformId;
    }
}
IeInfoRx.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IeInfoRx, deps: [{ token: i1.ResponsiveState }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
IeInfoRx.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IeInfoRx });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IeInfoRx, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ResponsiveState }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWUtaW5mby5yeC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9AZGlyZWN0aXZlcy9icm93c2Vycy9pZS1pbmZvLnJ4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFHbkMsTUFBTSxPQUFPLFFBQVMsU0FBUSxNQUFNO0lBQ2hDLFlBQ1csZ0JBQWlDLEVBQ1QsV0FBVztRQUMxQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFGOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNULGdCQUFXLEdBQVgsV0FBVyxDQUFBO0lBQ0osQ0FBQzs7cUdBSmxDLFFBQVEsaURBR0wsV0FBVzt5R0FIZCxRQUFROzJGQUFSLFFBQVE7a0JBRHBCLFVBQVU7OzBCQUlGLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbmFtZSBpZS1pbmZvLnJ4XHJcbiAqIEBkZXNjcmlwdGlvbiBJRSBJbmZvIHJlYWN0aXZlIHNlcnZpY2UgaW4gbmd4LXJlc3BvbnNpdmVcclxuICpcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlU3RhdGUgfSBmcm9tICcuLi8uLi9AY29yZS9wcm92aWRlcnMvcmVzcG9uc2l2ZS1zdGF0ZS9yZXNwb25zaXZlLXN0YXRlJztcclxuaW1wb3J0IHsgSWVJbmZvIH0gZnJvbSAnLi9pZS1pbmZvJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEllSW5mb1J4IGV4dGVuZHMgSWVJbmZvICB7XHJcbiAgICBjb25zdHJ1Y3RvciggXHJcbiAgICAgICAgcHVibGljIF9yZXNwb25zaXZlU3RhdGU6IFJlc3BvbnNpdmVTdGF0ZSxcclxuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgX3BsYXRmb3JtSWRcclxuICAgICkgeyBzdXBlcihfcmVzcG9uc2l2ZVN0YXRlLCBfcGxhdGZvcm1JZCk7IH1cclxufVxyXG4iXX0=
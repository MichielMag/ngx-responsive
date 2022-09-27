/**
 * @name responsive.module
 * @description Core module in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
import { NgModule } from '@angular/core';
import { ResponsiveState } from './@core/providers/responsive-state/responsive-state';
import { ResponsiveConfig } from './@core/providers/responsive-config/responsive-config';
import { InjectionToken } from '@angular/core';
import { BOOTSTRAP_DIRECTIVES } from './@directives/bootstrap/index';
import { BROWSER_DIRECTIVES, BROWSER_INFO_RX, IE_INFO_RX } from './@directives/browsers/index';
import { CUSTOMSIZES_DIRECTIVES } from './@directives/custom-sizes/index';
import { DEVICES_DIRECTIVES, DEVICES_INFO_RX } from './@directives/devices/index';
import { PIXELRATIO_DIRECTIVES } from './@directives/pixelratio/index';
import { RESPONSIVE_DIRECTIVE } from './@directives/responsive/index';
import { RESPONSIVE_SIZE_INFO_DIRECTIVE, RESPONSIVE_SIZE_INFO_RX } from './@directives/responsive-size-info/index';
import { RESPONSIVEWINDOW_DIRECTIVE } from './@directives/responsive-window/index';
import { USERAGENT_INFO_DIRECTIVE, USERAGENT_INFO_RX } from './@directives/useragent/index';
import { PlatformService } from './@core/providers/platform-service/platform.service';
import * as i0 from "@angular/core";
import * as i1 from "./@directives/bootstrap/bootstrap-directives";
import * as i2 from "./@directives/browsers/browsers-directives";
import * as i3 from "./@directives/browsers/browser-info.directive";
import * as i4 from "./@directives/browsers/ie-info.directive";
import * as i5 from "./@directives/custom-sizes/custom-sizes-directives";
import * as i6 from "./@directives/devices/devices-directives";
import * as i7 from "./@directives/devices/devices-info.directive";
import * as i8 from "./@directives/devices/devices-standard-info.directive";
import * as i9 from "./@directives/devices/orientation-info.directive";
import * as i10 from "./@directives/pixelratio/pixelratio-directives";
import * as i11 from "./@directives/responsive/responsive";
import * as i12 from "./@directives/responsive-window/responsive-window";
import * as i13 from "./@directives/useragent/useragent-info.directive";
import * as i14 from "./@directives/responsive-size-info/responsive-size-info.directive";
export const RESPONSIVE_CONFIGURATION = new InjectionToken('config');
export function responsiveConfiguration(config) {
    return new ResponsiveConfig(config);
}
export class ResponsiveModule {
    static forRoot(config = null) {
        return {
            ngModule: ResponsiveModule,
            providers: [{
                    provide: RESPONSIVE_CONFIGURATION,
                    useValue: (config !== null) ? config : {
                        breakPoints: {
                            xs: { max: 767 },
                            sm: { min: 768, max: 991 },
                            md: { min: 992, max: 1199 },
                            lg: { min: 1200, max: 1599 },
                            xl: { min: 1600 }
                        },
                        debounceTime: 100,
                        renderOnServer: false
                    }
                }, {
                    provide: ResponsiveConfig,
                    useFactory: responsiveConfiguration,
                    deps: [RESPONSIVE_CONFIGURATION]
                },
                ResponsiveState,
                PlatformService,
                RESPONSIVE_SIZE_INFO_RX,
                USERAGENT_INFO_RX,
                BROWSER_INFO_RX,
                IE_INFO_RX,
                DEVICES_INFO_RX]
        };
    }
}
ResponsiveModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ResponsiveModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveModule, declarations: [i1.XlDirective, i1.LgDirective, i1.MdDirective, i1.SmDirective, i1.XsDirective, i1.ShowItBootstrapDirective, i1.HideItBootstrapDirective, i2.IsChromeDirective, i2.IsFirefoxDirective, i2.IsSafariDirective, i2.IsOperaDirective, i2.IsIEDirective, i2.IsIE9Directive, i2.IsIE10Directive, i2.IsIE11Directive, i2.IsIE12Directive, i2.ShowItBrowserDirective, i2.HideItBrowserDirective, i2.ShowIEVersionDirective, i2.HideIEVersionDirective, i3.BrowserInfoDirective, i4.IeInfoDirective, i5.ShowItSizesDirective, i5.HideItSizesDirective, i6.IsDesktopDirective, i6.IsTabletDirective, i6.IsMobileDirective, i6.IsSmartTvDirective, i6.ShowItDeviceDirective, i6.HideItDeviceDirective, i6.IsIphoneDirective, i6.IsIpadDirective, i6.IsAndroidMobileDirective, i6.IsAndroidTabletDirective, i6.IsWindowsPhoneDirective, i6.ShowItStandardDirective, i6.HideItStandardDirective, i6.IsPortraitDirective, i6.IsLandscapeDirective, i7.DeviceInfoDirective, i8.DeviceStandardInfoDirective, i9.OrientationInfoDirective, i10.Is1xPixelDirective, i10.IsRetinaDirective, i10.Is4kDirective, i10.PixelRatioInfoDirective, i11.ResponsiveDirective, i12.ResponsiveWindowDirective, i13.UserAgentInfoDirective, i14.ResponsiveSizeInfoDirective], exports: [i1.XlDirective, i1.LgDirective, i1.MdDirective, i1.SmDirective, i1.XsDirective, i1.ShowItBootstrapDirective, i1.HideItBootstrapDirective, i2.IsChromeDirective, i2.IsFirefoxDirective, i2.IsSafariDirective, i2.IsOperaDirective, i2.IsIEDirective, i2.IsIE9Directive, i2.IsIE10Directive, i2.IsIE11Directive, i2.IsIE12Directive, i2.ShowItBrowserDirective, i2.HideItBrowserDirective, i2.ShowIEVersionDirective, i2.HideIEVersionDirective, i3.BrowserInfoDirective, i4.IeInfoDirective, i5.ShowItSizesDirective, i5.HideItSizesDirective, i6.IsDesktopDirective, i6.IsTabletDirective, i6.IsMobileDirective, i6.IsSmartTvDirective, i6.ShowItDeviceDirective, i6.HideItDeviceDirective, i6.IsIphoneDirective, i6.IsIpadDirective, i6.IsAndroidMobileDirective, i6.IsAndroidTabletDirective, i6.IsWindowsPhoneDirective, i6.ShowItStandardDirective, i6.HideItStandardDirective, i6.IsPortraitDirective, i6.IsLandscapeDirective, i7.DeviceInfoDirective, i8.DeviceStandardInfoDirective, i9.OrientationInfoDirective, i10.Is1xPixelDirective, i10.IsRetinaDirective, i10.Is4kDirective, i10.PixelRatioInfoDirective, i11.ResponsiveDirective, i12.ResponsiveWindowDirective, i13.UserAgentInfoDirective, i14.ResponsiveSizeInfoDirective] });
ResponsiveModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResponsiveModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BOOTSTRAP_DIRECTIVES,
                        BROWSER_DIRECTIVES,
                        CUSTOMSIZES_DIRECTIVES,
                        DEVICES_DIRECTIVES,
                        PIXELRATIO_DIRECTIVES,
                        RESPONSIVE_DIRECTIVE,
                        RESPONSIVEWINDOW_DIRECTIVE,
                        USERAGENT_INFO_DIRECTIVE,
                        RESPONSIVE_SIZE_INFO_DIRECTIVE
                    ],
                    exports: [
                        BOOTSTRAP_DIRECTIVES,
                        BROWSER_DIRECTIVES,
                        CUSTOMSIZES_DIRECTIVES,
                        DEVICES_DIRECTIVES,
                        PIXELRATIO_DIRECTIVES,
                        RESPONSIVE_DIRECTIVE,
                        RESPONSIVEWINDOW_DIRECTIVE,
                        USERAGENT_INFO_DIRECTIVE,
                        RESPONSIVE_SIZE_INFO_DIRECTIVE
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVzcG9uc2l2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3RGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLElBQUksY0FBYyxDQUFvQixRQUFRLENBQUMsQ0FBQztBQUV4RixNQUFNLFVBQVUsdUJBQXVCLENBQUMsTUFBeUI7SUFDN0QsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUEyQkQsTUFBTSxPQUFPLGdCQUFnQjtJQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQTRCLElBQUk7UUFDbEQsT0FBTztZQUNILFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQWE7b0JBQ3BCLE9BQU8sRUFBRSx3QkFBd0I7b0JBQ2pDLFFBQVEsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsV0FBVyxFQUFFOzRCQUNULEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7NEJBQ2hCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTs0QkFDMUIsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFOzRCQUMzQixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7NEJBQzVCLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7eUJBQ3BCO3dCQUNELFlBQVksRUFBRSxHQUFHO3dCQUNqQixjQUFjLEVBQUUsS0FBSztxQkFDSDtpQkFDekIsRUFBQztvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixVQUFVLEVBQUUsdUJBQXVCO29CQUNuQyxJQUFJLEVBQUMsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDbEM7Z0JBQ0QsZUFBZTtnQkFDZixlQUFlO2dCQUNmLHVCQUF1QjtnQkFDdkIsaUJBQWlCO2dCQUNqQixlQUFlO2dCQUNmLFVBQVU7Z0JBQ1YsZUFBZSxDQUFDO1NBQ25CLENBQUM7SUFDTixDQUFDOzs2R0E5QlEsZ0JBQWdCOzhHQUFoQixnQkFBZ0I7OEdBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQTFCNUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQ1I7d0JBQ0ksb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsMEJBQTBCO3dCQUMxQix3QkFBd0I7d0JBQ3hCLDhCQUE4QjtxQkFDakM7b0JBQ0wsT0FBTyxFQUNIO3dCQUNJLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixzQkFBc0I7d0JBQ3RCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3dCQUN4Qiw4QkFBOEI7cUJBQ2pDO2lCQUNSIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIHJlc3BvbnNpdmUubW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvbiBDb3JlIG1vZHVsZSBpbiBuZ3gtcmVzcG9uc2l2ZVxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hbnUgQ3V0aWxsYXNcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVN0YXRlIH0gZnJvbSAnLi9AY29yZS9wcm92aWRlcnMvcmVzcG9uc2l2ZS1zdGF0ZS9yZXNwb25zaXZlLXN0YXRlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4vQGNvcmUvcHJvdmlkZXJzL3Jlc3BvbnNpdmUtY29uZmlnL3Jlc3BvbnNpdmUtY29uZmlnJztcclxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQk9PVFNUUkFQX0RJUkVDVElWRVMgfSBmcm9tICcuL0BkaXJlY3RpdmVzL2Jvb3RzdHJhcC9pbmRleCc7XHJcbmltcG9ydCB7IEJST1dTRVJfRElSRUNUSVZFUywgQlJPV1NFUl9JTkZPX1JYLCBJRV9JTkZPX1JYIH0gZnJvbSAnLi9AZGlyZWN0aXZlcy9icm93c2Vycy9pbmRleCc7XHJcbmltcG9ydCB7IENVU1RPTVNJWkVTX0RJUkVDVElWRVMgfSBmcm9tICcuL0BkaXJlY3RpdmVzL2N1c3RvbS1zaXplcy9pbmRleCc7XHJcbmltcG9ydCB7IERFVklDRVNfRElSRUNUSVZFUywgREVWSUNFU19JTkZPX1JYIH0gZnJvbSAnLi9AZGlyZWN0aXZlcy9kZXZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgUElYRUxSQVRJT19ESVJFQ1RJVkVTIH0gZnJvbSAnLi9AZGlyZWN0aXZlcy9waXhlbHJhdGlvL2luZGV4JztcclxuaW1wb3J0IHsgUkVTUE9OU0lWRV9ESVJFQ1RJVkUgfSBmcm9tICcuL0BkaXJlY3RpdmVzL3Jlc3BvbnNpdmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBSRVNQT05TSVZFX1NJWkVfSU5GT19ESVJFQ1RJVkUsIFJFU1BPTlNJVkVfU0laRV9JTkZPX1JYIH0gZnJvbSAnLi9AZGlyZWN0aXZlcy9yZXNwb25zaXZlLXNpemUtaW5mby9pbmRleCc7XHJcbmltcG9ydCB7IFJFU1BPTlNJVkVXSU5ET1dfRElSRUNUSVZFIH0gZnJvbSAnLi9AZGlyZWN0aXZlcy9yZXNwb25zaXZlLXdpbmRvdy9pbmRleCc7XHJcbmltcG9ydCB7IFVTRVJBR0VOVF9JTkZPX0RJUkVDVElWRSwgVVNFUkFHRU5UX0lORk9fUlggfSBmcm9tICcuL0BkaXJlY3RpdmVzL3VzZXJhZ2VudC9pbmRleCc7XHJcbmltcG9ydCB7IElSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnLi9AY29yZS9pbnRlcmZhY2VzL3Jlc3BvbnNpdmUtY29uZmlnLmludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3Byb3ZpZGVycy9wbGF0Zm9ybS1zZXJ2aWNlL3BsYXRmb3JtLnNlcnZpY2UnO1xyXG5leHBvcnQgY29uc3QgUkVTUE9OU0lWRV9DT05GSUdVUkFUSU9OID0gbmV3IEluamVjdGlvblRva2VuPElSZXNwb25zaXZlQ29uZmlnPignY29uZmlnJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2l2ZUNvbmZpZ3VyYXRpb24oY29uZmlnOiBJUmVzcG9uc2l2ZUNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zaXZlQ29uZmlnKGNvbmZpZyk7XHJcbn1cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczpcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIEJPT1RTVFJBUF9ESVJFQ1RJVkVTLFxyXG4gICAgICAgICAgICBCUk9XU0VSX0RJUkVDVElWRVMsXHJcbiAgICAgICAgICAgIENVU1RPTVNJWkVTX0RJUkVDVElWRVMsXHJcbiAgICAgICAgICAgIERFVklDRVNfRElSRUNUSVZFUyxcclxuICAgICAgICAgICAgUElYRUxSQVRJT19ESVJFQ1RJVkVTLFxyXG4gICAgICAgICAgICBSRVNQT05TSVZFX0RJUkVDVElWRSxcclxuICAgICAgICAgICAgUkVTUE9OU0lWRVdJTkRPV19ESVJFQ1RJVkUsXHJcbiAgICAgICAgICAgIFVTRVJBR0VOVF9JTkZPX0RJUkVDVElWRSxcclxuICAgICAgICAgICAgUkVTUE9OU0lWRV9TSVpFX0lORk9fRElSRUNUSVZFXHJcbiAgICAgICAgXSxcclxuICAgIGV4cG9ydHM6XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBCT09UU1RSQVBfRElSRUNUSVZFUyxcclxuICAgICAgICAgICAgQlJPV1NFUl9ESVJFQ1RJVkVTLFxyXG4gICAgICAgICAgICBDVVNUT01TSVpFU19ESVJFQ1RJVkVTLFxyXG4gICAgICAgICAgICBERVZJQ0VTX0RJUkVDVElWRVMsXHJcbiAgICAgICAgICAgIFBJWEVMUkFUSU9fRElSRUNUSVZFUyxcclxuICAgICAgICAgICAgUkVTUE9OU0lWRV9ESVJFQ1RJVkUsXHJcbiAgICAgICAgICAgIFJFU1BPTlNJVkVXSU5ET1dfRElSRUNUSVZFLFxyXG4gICAgICAgICAgICBVU0VSQUdFTlRfSU5GT19ESVJFQ1RJVkUsXHJcbiAgICAgICAgICAgIFJFU1BPTlNJVkVfU0laRV9JTkZPX0RJUkVDVElWRVxyXG4gICAgICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVNb2R1bGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSVJlc3BvbnNpdmVDb25maWcgPSBudWxsKTogTW9kdWxlV2l0aFByb3ZpZGVyczxSZXNwb25zaXZlTW9kdWxlPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IFJlc3BvbnNpdmVNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogWyAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3ZpZGU6IFJFU1BPTlNJVkVfQ09ORklHVVJBVElPTixcclxuICAgICAgICAgICAgICAgIHVzZVZhbHVlOiAoY29uZmlnICE9PSBudWxsKSA/IGNvbmZpZyA6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4czogeyBtYXg6IDc2NyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogeyBtaW46IDc2OCwgbWF4OiA5OTEgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IHsgbWluOiA5OTIsIG1heDogMTE5OSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZzogeyBtaW46IDEyMDAsIG1heDogMTU5OSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bDogeyBtaW46IDE2MDAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT25TZXJ2ZXI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9IGFzIElSZXNwb25zaXZlQ29uZmlnXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgcHJvdmlkZTogUmVzcG9uc2l2ZUNvbmZpZyxcclxuICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IHJlc3BvbnNpdmVDb25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGVwczpbUkVTUE9OU0lWRV9DT05GSUdVUkFUSU9OXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBSZXNwb25zaXZlU3RhdGUsXHJcbiAgICAgICAgICAgIFBsYXRmb3JtU2VydmljZSxcclxuICAgICAgICAgICAgUkVTUE9OU0lWRV9TSVpFX0lORk9fUlgsXHJcbiAgICAgICAgICAgIFVTRVJBR0VOVF9JTkZPX1JYLFxyXG4gICAgICAgICAgICBCUk9XU0VSX0lORk9fUlgsXHJcbiAgICAgICAgICAgIElFX0lORk9fUlgsXHJcbiAgICAgICAgICAgIERFVklDRVNfSU5GT19SWF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19
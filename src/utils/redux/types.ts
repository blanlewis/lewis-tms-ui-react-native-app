export enum ActivePageEnum {
  DOSSIER_PLANNING_PAGE = "/(main)/dossierPlanning",
  BOOKING_CREATION_PAGE = "/(main)/bookingCreation",
  DRIVER_APP_PAGE = "/(main)/driverApp",
  FLEET_VIEW_PAGE = "/(main)/fleetView",
  REPORTS_PAGE = "/(main)/reports",
  RESOURCE_PLANNING_PAGE = "/(main)/resourcePlanning",
  ROUTE_ESTIMATION_PAGE = "/(main)/routeEstimation",
}

export interface ReduxHookPageState {
  isMenuDrawerOpen: boolean;
  activePage: ActivePageEnum;
}
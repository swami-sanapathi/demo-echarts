import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "charts",
    loadComponent: () => import("./charts/chart.component"),
  },
  {
    path: "**",
    redirectTo: "charts",
    pathMatch: "full",
  },
];

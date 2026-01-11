import { useAppStore } from "@/store/app.store";

export async function initLocation() {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      useAppStore.getState().setLocation(
        {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        },
        "geo"
      );
    },
    () => {}
  );
}

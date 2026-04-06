<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const mapContainer = ref<HTMLElement | null>(null)
const statusMessage = ref('Pinned location loaded.')

let mapInstance: L.Map | null = null
let liveMarker: L.Marker | null = null

const defaultCenter: L.LatLngTuple = [14.621889, 121.093267]
const googleMapsUrl = computed(() => {
  const [lat, lng] = defaultCenter
  return `https://www.google.com/maps?q=${lat},${lng}`
})

onMounted(() => {
  if (!mapContainer.value) {
    statusMessage.value = 'Map container is unavailable.'
    return
  }

  mapInstance = L.map(mapContainer.value, {
    zoomControl: false,
    attributionControl: false,
  }).setView(defaultCenter, 13)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(mapInstance)

  liveMarker = L.marker(defaultCenter).addTo(mapInstance)
})

onUnmounted(() => {
  mapInstance?.remove()
  mapInstance = null
  liveMarker = null
})
</script>

<template>
  <div class="space-y-2 rounded-2xl bg-surface-container-low ghost-border p-2">
    <div ref="mapContainer" class="h-40 w-full rounded-xl" />
    <p class="px-2 text-xs text-on-surface-muted">
      {{ statusMessage }}
    </p>
    <a
      :href="googleMapsUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="mx-2 mb-1 inline-flex items-center rounded-lg border border-outline-variant/30 px-2 py-1 text-xs text-on-surface transition hover:bg-surface-container-high"
    >
      Visit in Google Maps
    </a>
  </div>
</template>

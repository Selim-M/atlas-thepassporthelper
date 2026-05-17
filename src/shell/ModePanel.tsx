import { useAppStore } from '@/store/useAppStore';
import { MapMode } from '@/modes/map/MapMode';
import TripsPlaceholder from '@/modes/trips/Placeholder';
import FlightsPlaceholder from '@/modes/flights/Placeholder';
import StaysPlaceholder from '@/modes/stays/Placeholder';
import ItineraryPlaceholder from '@/modes/itinerary/Placeholder';

export function ModePanel() {
  const activeMode = useAppStore((s) => s.activeMode);

  switch (activeMode) {
    case 'map':
      return <MapMode />;
    case 'trips':
      return <TripsPlaceholder />;
    case 'flights':
      return <FlightsPlaceholder />;
    case 'stays':
      return <StaysPlaceholder />;
    case 'itinerary':
      return <ItineraryPlaceholder />;
  }
}

import ShipmentDetails from '@/components/shipments/ShipmentDetails';

type Props = {
  params: { shipmentId: string };
};

export default function Company({ params }: Props) {
  const { shipmentId } = params;

  return <ShipmentDetails shipmentId={shipmentId} />;
}

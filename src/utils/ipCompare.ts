export function ipv4ToNumber(ip: string): number {
  return (
    ip.split(".").reduce((total, part) => (total << 8) + Number(part), 0) >>> 0
  );
}

export function compareIpv4(a: string, b: string): number {
  const numA = ipv4ToNumber(a);
  const numB = ipv4ToNumber(b);
  return numA - numB;
}

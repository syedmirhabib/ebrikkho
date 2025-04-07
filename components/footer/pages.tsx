import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-semibold text-lg">Company</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/page/about">About Us</Link></li>
            <li><Link href="/page/contact">Contact Us</Link></li>
            <li><Link href="/page/support">Support</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Help</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/page/faq">FAQs</Link></li>
            <li><Link href="/page/returns">Returns & Refunds</Link></li>
            <li><Link href="/page/warranty">Warranty</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/page/privacy">Privacy Policy</Link></li>
            <li><Link href="/page/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">More</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/page/bulk-gifting">Corporate/Bulk Gifting</Link></li>
            <li><Link href="/page/damage-replacement">Damage Replacement</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

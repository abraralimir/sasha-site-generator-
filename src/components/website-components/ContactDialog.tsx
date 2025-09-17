'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 16.95A8.97 8.97 0 0 0 19.5 12.5c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 2.22.81 4.24 2.16 5.82L2 22l4.18-1.18" />
    </svg>
);


export default function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="default">
          Request a Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black/50 border-white/20 text-white">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Reach out to us via email, WhatsApp, or phone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around py-4">
          <Link href="mailto:alimirabrar@gmail.com" passHref>
            <Button variant="glass" size="icon" className="h-16 w-16 rounded-full">
              <Mail className="h-8 w-8" />
            </Button>
          </Link>
          <Link href="https://wa.me/919676649442" passHref>
             <Button variant="glass" size="icon" className="h-16 w-16 rounded-full">
                <WhatsAppIcon className="h-8 w-8"/>
             </Button>
          </Link>
          <Link href="tel:+919676649442" passHref>
            <Button variant="glass" size="icon" className="h-16 w-16 rounded-full">
              <Phone className="h-8 w-8" />
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

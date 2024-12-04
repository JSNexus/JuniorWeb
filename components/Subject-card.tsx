import { type LucideIcon } from "lucide-react";
import Link from "next/link";

interface SubjectCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
}

export function SubjectCard({ title, icon: Icon, href }: SubjectCardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <Icon className="w-8 h-8 text-primary" />
        <h2 className="text-sm font-medium text-center">{title}</h2>
      </div>
    </Link>
  );
}

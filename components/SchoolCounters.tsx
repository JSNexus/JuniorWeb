import {
  LucideIcon,
  Users,
  BookOpen,
  GraduationCap,
  Building2,
  PaintBucket,
  Trophy,
} from "lucide-react";
import React, { useState, useEffect } from "react";

// Custom hook for counter animation
const useCounterAnimation = (end: number, duration: number = 2000): number => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 50));
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

// Define types for CounterItem props
interface CounterItemProps {
  icon: LucideIcon;
  end: number;
  label: string;
  color: string;
}

// Counter Item Component
const CounterItem: React.FC<CounterItemProps> = ({
  icon: Icon,
  end,
  label,
  color,
}) => {
  const count = useCounterAnimation(end);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
      <div
        className={`w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full ${color} text-white`}
      >
        <Icon size={40} />
      </div>
      <div className="space-y-2">
        <p className="text-4xl font-bold text-primary">{count}+</p>
        <p className="text-muted-foreground font-medium">{label}</p>
      </div>
    </div>
  );
};

// School Counters Component
export const SchoolCounters: React.FC = () => {
  const counterData = [
    {
      icon: Users,
      end: 500,
      label: "Happy Students",
      color: "bg-blue-500",
    },
    {
      icon: GraduationCap,
      end: 50,
      label: "Certified Teachers",
      color: "bg-green-500",
    },
    {
      icon: Building2,
      end: 20,
      label: "Classrooms",
      color: "bg-purple-500",
    },
    {
      icon: BookOpen,
      end: 100,
      label: "Courses",
      color: "bg-orange-500",
    },
    {
      icon: PaintBucket,
      end: 30,
      label: "Activities",
      color: "bg-pink-500",
    },
    {
      icon: Trophy,
      end: 75,
      label: "Awards Won",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our School at a Glance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the vibrant world of learning and growth at our school,
            where every number tells a story of achievement and potential.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {counterData.map((item, index) => (
            <CounterItem
              key={index}
              icon={item.icon}
              end={item.end}
              label={item.label}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolCounters;

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl mb-2">
            Role-Based Auth System
          </CardTitle>
          <CardDescription className="text-lg">
            A full-stack authentication application with User and Admin roles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">User Role</h3>
              <p className="text-sm text-blue-700">
                Standard user access with personalized dashboard
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Admin Role</h3>
              <p className="text-sm text-purple-700">
                Administrator access with additional privileges
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Login
              </Button>
            </Link>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-2">Features:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Secure JWT authentication</li>
              <li>✓ Role-based access control</li>
              <li>✓ Protected dashboard routes</li>
              <li>✓ Password hashing with bcrypt</li>
              <li>✓ Form validation with Zod</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

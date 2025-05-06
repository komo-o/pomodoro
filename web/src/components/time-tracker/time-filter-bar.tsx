"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function TimeFilterBar() {
  return (
    <div className="p-4 border-b flex items-center justify-between">
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="text-sm">
          フィルター <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          チーム <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          クライアント <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          計画 <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          仕事 <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          見つつ <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          状態 <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          説明 <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
      </div>
      <Button className="bg-[#3B9AE1] hover:bg-[#2980b9]">
        フィルターを適用します
      </Button>
    </div>
  );
}
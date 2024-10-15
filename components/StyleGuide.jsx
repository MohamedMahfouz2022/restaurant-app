"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Label } from './ui/label'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const StyleGuide = () => {
  const [date, setDate] = React.useState()
  return (
    <>
      <div className='flex flex-col gap-y-4 p-24 '>
        <h1>Heasline 1</h1>
        <h2>Heasline 2</h2>
        <h3>Heasline 3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum cum voluptates saepe provident tempora? Quos, quis! Facilis impedit rem eum earum nisi est sunt consequuntur, ipsam voluptate voluptatibus officiis ipsa adipisci neque magnam nostrum molestiae accusantium dolore veritatis voluptatum cupiditate cum unde odio! Vero, voluptatem neque! Commodi, illum tempora!</p>
        <div className='bg-black p-24 flex flex-col gap-y-4'>
          <Button variant='default'>button 1</Button>
          <Button variant='orange'>button 2</Button>
          <Button variant='orange' size='sm'>button 2</Button>
          <Button variant='input'>button 3</Button>
          <div>
            <Label>date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"input"}
                  className={cn("w-full justify-start text-left font-normal",)}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label>select</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  )
}

export default StyleGuide
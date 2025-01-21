<template>
  <section class="col-span-3 text-right">
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="sm" class="btn-sm">
          <Icon icon="lucide:list-filter" width="24" height="24" />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtro</SheetTitle>
          <SheetDescription>
            filtre os profissonais
          </SheetDescription>
        </SheetHeader>
        <div class="grid gap-4 py-4">
          <div class="flex flex-col mt-6">
            <h3 for="name" class="font-bold">
              Preço
            </h3>
            <div class=" flex gap-4 mt-4 items-center">
              <Input type="number" placeholder="min" />
              <h3 class="font-bold">-</h3>
              <Input type="number" placeholder="max" />
            </div>
          </div>
          <div class="grid grid-cols-4 items-center gap-4 mt-8">
            <Label for="name" class="text-right">
              Name
            </Label>
            <Input id="name" default-value="Pedro Duarte" class="col-span-3" />
          </div>

          <div class="grid grid-cols-4 items-center gap-4 mt-8">
            <Label for="username" class="text-right">
              Username
            </Label>
            <Input id="username" default-value="@peduarte" class="col-span-3" />
          </div>
        </div>

        <SheetFooter>
          <SheetClose as-child>
            <Button type="submit">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </section>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

</script>

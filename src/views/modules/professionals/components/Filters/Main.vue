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
          <div class="flex flex-col space-y-4 mt-6">
            <Label for="name" class="">
              Preço
            </Label>
            <div class=" flex gap-4 mt-4 items-center">
              <Input type="number" placeholder="min" />
              <h3 class="font-bold">-</h3>
              <Input type="number" placeholder="max" />
            </div>
          </div>
          <div class="flex flex-col space-y-4 mt-4">
            <Label for="name" class="">
              Tempo de Experiência (anos)
            </Label>
            <Input id="name" default-value="3" class="col-span-3" />
          </div>

          <div class="flex flex-col space-y-4 mt-4">
            <Label for="username" class="">
              Cidade
            </Label>
            <Select>
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Select a timezone" />
              </SelectTrigger>
              <SelectContent class="h-[300px]">
                <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value="est">
                    Eastern Standard Time (EST)
                  </SelectItem>
                  <SelectItem value="cst">
                    Central Standard Time (CST)
                  </SelectItem>
                  <SelectItem value="mst">
                    Mountain Standard Time (MST)
                  </SelectItem>
                  <SelectItem value="pst">
                    Pacific Standard Time (PST)
                  </SelectItem>
                  <SelectItem value="akst">
                    Alaska Standard Time (AKST)
                  </SelectItem>
                  <SelectItem value="hst">
                    Hawaii Standard Time (HST)
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Europe & Africa</SelectLabel>
                  <SelectItem value="gmt">
                    Greenwich Mean Time (GMT)
                  </SelectItem>
                  <SelectItem value="cet">
                    Central European Time (CET)
                  </SelectItem>
                  <SelectItem value="eet">
                    Eastern European Time (EET)
                  </SelectItem>
                  <SelectItem value="west">
                    Western European Summer Time (WEST)
                  </SelectItem>
                  <SelectItem value="cat">
                    Central Africa Time (CAT)
                  </SelectItem>
                  <SelectItem value="eat">
                    East Africa Time (EAT)
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Asia</SelectLabel>
                  <SelectItem value="msk">
                    Moscow Time (MSK)
                  </SelectItem>
                  <SelectItem value="ist">
                    India Standard Time (IST)
                  </SelectItem>
                  <SelectItem value="cst_china">
                    China Standard Time (CST)
                  </SelectItem>
                  <SelectItem value="jst">
                    Japan Standard Time (JST)
                  </SelectItem>
                  <SelectItem value="kst">
                    Korea Standard Time (KST)
                  </SelectItem>
                  <SelectItem value="ist_indonesia">
                    Indonesia Central Standard Time (WITA)
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Australia & Pacific</SelectLabel>
                  <SelectItem value="awst">
                    Australian Western Standard Time (AWST)
                  </SelectItem>
                  <SelectItem value="acst">
                    Australian Central Standard Time (ACST)
                  </SelectItem>
                  <SelectItem value="aest">
                    Australian Eastern Standard Time (AEST)
                  </SelectItem>
                  <SelectItem value="nzst">
                    New Zealand Standard Time (NZST)
                  </SelectItem>
                  <SelectItem value="fjt">
                    Fiji Time (FJT)
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>South America</SelectLabel>
                  <SelectItem value="art">
                    Argentina Time (ART)
                  </SelectItem>
                  <SelectItem value="bot">
                    Bolivia Time (BOT)
                  </SelectItem>
                  <SelectItem value="brt">
                    Brasilia Time (BRT)
                  </SelectItem>
                  <SelectItem value="clt">
                    Chile Standard Time (CLT)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div class="flex flex-col space-y-4 mt-4">
            <Label for="name" class="">
              Idioma
            </Label>
            <Select>
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Selecionar idioma" />
              </SelectTrigger>
              <SelectContent class="h-[200px]">
                <SelectGroup>
                  <SelectItem value="est">
                    Portugues
                  </SelectItem>
                  <SelectItem value="cst">
                    Ingles
                  </SelectItem>
                  <SelectItem value="mst">
                    Espanhol
                  </SelectItem>
                  <SelectItem value="pst">
                    Françes
                  </SelectItem>
                  <SelectItem value="akst">
                    Japonês
                  </SelectItem>
                  <SelectItem value="hst">
                    Russo
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <SheetFooter>
          <SheetClose as-child>
            <Button type="submit">
              Filtrar
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
// import { ref } from 'vue'
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
</script>

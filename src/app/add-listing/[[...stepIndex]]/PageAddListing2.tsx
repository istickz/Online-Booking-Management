"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import Label from "@/components/Label";
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import React, { FC } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

export interface PageAddListing2Props {}

const PageAddListing2: FC<PageAddListing2Props> = () => {
  interface LocationMarkerProps {
    position: {
      lat: number;
      lng: number;
    };
  }

  const LocationMarker: FC<LocationMarkerProps> = ({ position }) => {
    return (
      <AdvancedMarker position={position}>
        <div className="relative">
          <Pin
            background="#0ea5e9"
            borderColor="#0369a1"
            glyphColor="#fff"
            scale={1.2}
          />
        </div>
      </AdvancedMarker>
    );
  };

  const defaultLocation = {
    lat: 55.9607277,
    lng: 36.2172614,
  };
  
  
  return (
    <>
      <h2 className="text-2xl font-semibold">Your place location</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        <ButtonSecondary>
          <MapPinIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="ml-3">Use current location</span>
        </ButtonSecondary>
        {/* ITEM */}
        <FormItem label="Country/Region">
          <Select>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Thailand">Thailand</option>
            <option value="France">France</option>
            <option value="Singapore">Singapore</option>
            <option value="Jappan">Jappan</option>
            <option value="Korea">Korea</option>
            <option value="...">...</option>
          </Select>
        </FormItem>
        <FormItem label="Street">
          <Input placeholder="..." />
        </FormItem>
        <FormItem label="Room number (optional)">
          <Input />
        </FormItem>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
          <FormItem label="City">
            <Input />
          </FormItem>
          <FormItem label="State">
            <Input />
          </FormItem>
          <FormItem label="Postal code">
            <Input />
          </FormItem>
        </div>
        <div>
          <Label>Detailed address</Label>
          <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            1110 Pennsylvania Avenue NW, Washington, DC 20230
          </span>
          <div className="mt-4">
            <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
              <div className="rounded-xl overflow-hidden">
              <APIProvider apiKey="AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY">
                  <Map
                    defaultCenter={defaultLocation}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <LocationMarker position={defaultLocation} />
                  </Map>
                </APIProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing2;

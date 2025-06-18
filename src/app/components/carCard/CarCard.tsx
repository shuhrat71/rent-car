"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import React from "react";
import { fetchCars } from "@/utils/fetchCars";

type Props = {};

function CarCard({}: Props) {
  const [cars, setCars] = useState<any[]>([]);

  useEffect(() => {
    const getCars = async () => {
      const data = await fetchCars();
      setCars(data);
    };

    getCars();
  });
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: 300,
            border: "1px solid #ccc",
            borderRadius: 2,
            padding: 2,
            boxShadow: 1,
          }}
        >
          {cars.map((car) => (
            <div key={car.id} className="border p-4 rounded-md shadow">
              <h2 className="text-xl font-bold">{car.name}</h2>
              <p>{car.price} so'm / kun</p>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default CarCard;

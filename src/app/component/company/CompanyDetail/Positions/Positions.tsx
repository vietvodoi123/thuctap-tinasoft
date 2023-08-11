"use client";
import Apipositions from "@/app/api/Apipositions";
import CreatePositions from "@/app/modal/CreatePosition/CreatePosition";
import { IDataPositions } from "@/types";
import { Button, Empty } from "antd";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import PositionItem from "./PositionItem/PositionItem";

type Props = { idCompany: string };

function Positions({ idCompany }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<IDataPositions[]>([]);
  useEffect(() => {
    const x = Apipositions.getAllPositions(idCompany);
    x.then((y) => setData(y));
  }, [setData]);
  console.log(data);

  return (
    <div className="w-[85%] mx-auto py-10">
      <div className="flex justify-between align-middle mb-14 relative title-department">
        <h1 className="text-[28px]">DANH SÁCH CHỨC VỤ</h1>
        <Button
          className="border-2 border-slate-600 text-slate-600 border-solid"
          size="large"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Create
        </Button>
      </div>
      <div className="">
        {data.length === 0 && (
          <div className=" p-10">
            <Empty />
          </div>
        )}
        {data.map((item) => (
          <PositionItem key={item.id} item={item} />
        ))}
      </div>
      {isOpen && (
        <CreatePositions
          idCompany={idCompany}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}

export default Positions;

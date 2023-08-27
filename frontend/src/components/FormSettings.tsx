import { useEffect, useState } from 'react';
import data from '../data/data.json';
import  Card  from './Card';
import { number } from 'prop-types';

interface Hero {
  name: string;
  img: string;
}

interface Group {
  superheroes?: Hero[];
  kombat?: { kombat: Hero[] }[];
}

interface SelectedItemsProps {
  selectedItems: Hero[];
}

export enum Dificulty {
  'facíl',
  'medio',
  'dificil',
}

interface FormSettingsProps {
  title: string
  options: string[] | Dificulty[]
}

function SelectedItems({ selectedItems }: SelectedItemsProps) {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap">
        {selectedItems.map((item) => (
          <div key={item.name} className="w-1/4 p-2">
            <Card name={item.name} img={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FormSettings({title, options}: FormSettingsProps) {
  const [groups, setGroups] = useState<string[]>(options);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<Hero[]>([]);

  // useEffect(() => {
  //   const allGroups = data.map((group) => Object.keys(group)[0]);
  //   setGroups(allGroups);
  // }, []);

  const handleOptionChange = (groupName: string) => {
    setSelectedGroup(groupName);
    console.log(`Seleccionado: ${groupName}`);

    // const selectedItemsData = data.find((group) => Object.keys(group)[0] === groupName) as Group;
    // if (selectedItemsData.superheroes) {
    //   setSelectedItems(selectedItemsData.superheroes);
    // } else if (selectedItemsData.kombat) {
    //   setSelectedItems(selectedItemsData.kombat[0].kombat);
    // }
  };

  return (
    <div>
      <div className="p-4 rounded-md bg-gray-200 inline-block m-4">
        <p className="text-lg font-bold mb-2">{title}</p>
        {groups && groups.map((groupName) => (
          <label key={groupName} className="block my-2">
            <input
              type="radio"
              name="theme"
              value={groupName}
              checked={selectedGroup === groupName}
              onChange={() => handleOptionChange(groupName)}
              className="mr-2 leading-tight"
            />           
            { typeof groupName === 'number' ?  Dificulty[groupName]:groupName }
          </label>
        ))}
      </div>

      {selectedItems.length > 0 && <SelectedItems selectedItems={selectedItems} />}
    </div>
  );
}
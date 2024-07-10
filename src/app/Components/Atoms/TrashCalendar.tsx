import React, { useState, useEffect, useRef } from 'react';
import trashCan from '/src/app/calendar.svg';
import Image from 'next/image';


interface Streets {
  id: number;
  name: string;
}

const TrashCalendar = ({ title, subtitle, host }: { title: string; subtitle: string, host:string }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<Streets[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<Streets[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const TrashCalendarContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(host+"/api/trash/streets");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Streets[] = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    fetchSuggestions();

    const handleClickOutside = (event: MouseEvent) => {
      if (TrashCalendarContainer.current && !TrashCalendarContainer.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    const filtered = suggestions.filter(
      suggestion => suggestion.name.toLowerCase().includes(userInput.toLowerCase())
    );

    setInputValue(e.currentTarget.value);
    setFilteredSuggestions(filtered);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>, id: number) => {
    setFilteredSuggestions([]);
    setInputValue(e.currentTarget.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    setSelectedId(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      if (activeSuggestionIndex === filteredSuggestions.length - 1) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    } else if (e.key === 'ArrowUp') {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeSuggestionIndex > -1) {
        const selectedSuggestion = filteredSuggestions[activeSuggestionIndex];
        setInputValue(selectedSuggestion.name);
        setSelectedId(selectedSuggestion.id);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
      }
    }
  };

  const handleDownload = async (isPDF: boolean) => {
    if (selectedId !== null) {
      try {
        const url =  isPDF
          ? `${host}/api/trash/pdf?streetId=${selectedId}`
          : `${host}/api/trash/ics?streetId=${selectedId}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const link = data.link;
        window.open(link, '_blank');
      } catch (error) {
        console.error('Error fetching the link', error);
      }
    }
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto">
        {filteredSuggestions.map((suggestion, index) => {
          let className = "p-2 cursor-pointer hover:bg-gray-200";
          if (index === activeSuggestionIndex) {
            className += " bg-blue-500 text-white";
          }
          return (
            <li className={className} key={suggestion.id} onClick={(e) => handleClick(e, suggestion.id)}>
              {suggestion.name}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="p-2 text-gray-500">
        <em>Ihre Straße konnte nicht gefunden</em>
      </div>
    );
  };

  return (
    <div className="relative graphBox h-full">
      <div className="flex flex-row items-baseline pb-6">
        <h4 className="graphTitle">{title}</h4>
        <p className="graphSubtitle">{subtitle}</p>
      </div>
      <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="relative w-full max-w-lg" ref={TrashCalendarContainer}>
          <input
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={inputValue}
            placeholder="Straßenname"
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {showSuggestions && inputValue && <SuggestionsListComponent />}
          <div className="flex flex-col sm:flex-row mt-4 w-full">
            <button
              onClick={() => handleDownload(true)}
              disabled={!inputValue || selectedId === null}
              className="mt-2 sm:mt-0 sm:mr-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-500"
            >
              Download als PDF
            </button>
            <button
              onClick={() => handleDownload(false)}
              disabled={!inputValue || selectedId === null}
              className="mt-2 sm:mt-0 sm:ml-4 p-2 bg-red-500 text-white rounded disabled:bg-gray-500"
            >
              Download als ICS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrashCalendar;

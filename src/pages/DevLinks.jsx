import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import phone from '../assets/phone.svg';
import { useLinks } from '../contexts/LinksContext';
import { useUserLinks } from '../features/links/useUserLinks';
import { useProfiles } from '../features/user/useProfiles';
import Nav from '../ui/Nav';
import PhoneContent from '../ui/PhoneContent';

function DevLinks() {
  const { handleGetLinks, handleReorderLinks, linksArr } = useLinks();
  const { profileDetails, isLoading } = useProfiles();
  const { userLinks } = useUserLinks();

  // Local state for user links to manage reordering
  const [localLinks, setLocalLinks] = useState(linksArr);
  useEffect(() => {
    setLocalLinks(linksArr);
  }, [linksArr]);

  
  useEffect(() => {
    if (userLinks) {
      // Synchronize local state with context
      handleGetLinks(userLinks[0]?.userLinks);
    }
  }, [userLinks]);

  const getLinkPosition = (id) =>
    localLinks.findIndex((link) => link.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return; // Check if dropping in the same position

    const originalPosition = getLinkPosition(active.id);
    const newPosition = getLinkPosition(over.id);

    const reorderedLinks = arrayMove(localLinks, originalPosition, newPosition);

    // Update both local and context states to keep them in sync
    setLocalLinks(reorderedLinks);
    handleReorderLinks(reorderedLinks);

  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const data = {
    profileDetails,
    isLoading,
    userLinks,
  };
  return (
    <>
      <Nav />

      <div className="grid lg:grid-cols-2 gap-4 mt-4 items-start">
        <div className="relative hidden bg-white-100 h-full rounded-md p-3 lg:flex justify-center">
          <div className="flex flex-col items-center relative z-10 top-12 w-48">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCorners}
              onDragEnd={handleDragEnd}
            >
              <PhoneContent
                purpose="linkPage"
                content={{ ...data, userLinks: localLinks }}
              />
            </DndContext>
          </div>
          <img className="w-[17rem] absolute top-0" src={phone} alt="" />
        </div>

        <div className="bg-white-100 px-4 md:px-5 py-5 h-full rounded-md flex flex-col">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DevLinks;

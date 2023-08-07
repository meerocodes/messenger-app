'use client'

import { FullCoversationType } from "@/app/types";

interface ConversationListProps {
    initialItems: FullCoversationType[]
}

const ConversationList: React.FC<ConversationListProps> = ({
    initialItems
}) => {
    return ( 
        <div>
            convo list
        </div>
     );
}
 
export default ConversationList;
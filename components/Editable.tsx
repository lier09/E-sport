
import React, { ElementType } from 'react';

interface EditableProps {
    value: string;
    onUpdate: (newValue: string) => void;
    as?: ElementType;
    className?: string;
}

const Editable: React.FC<EditableProps> = ({ value, onUpdate, as: Tag = 'span', className }) => {
    
    const handleBlur = (evt: React.FocusEvent<HTMLElement>) => {
        const newText = evt.currentTarget.innerHTML;
        if (newText !== value) {
            onUpdate(newText);
        }
    };

    return (
        <Tag
            onBlur={handleBlur}
            contentEditable
            suppressContentEditableWarning={true}
            dangerouslySetInnerHTML={{ __html: value }}
            className={className}
        />
    );
};

export default Editable;

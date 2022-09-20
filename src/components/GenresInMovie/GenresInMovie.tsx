import React, {FC} from 'react';

const GenresInMovie: FC<{ genre: { id: number; name: string; }; }> = ({genre: {name}}) => {
    return (
        <>
            {name + ` `}
        </>
    );
};

export default GenresInMovie;

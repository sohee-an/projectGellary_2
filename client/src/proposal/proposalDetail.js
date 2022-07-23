import { useParams } from 'react-router-dom';
import { ProjectDetail } from '../share/projectDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ExhReviw from '../exhibition/exhReviw';
import { Box } from '@mui/material';

function PropsalDetail() {
  const [exhibitionProject, setExhibitionProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/proposal/postId/${id}`)
      .then((res) => setExhibitionProject(res.data));
  }, []);

  return (
    <>
      <ProjectDetail exhibitionProject={exhibitionProject} />
      <Box sx={{ width: '100%' }} className="displayTapBox">
        <ExhReviw exhibitionProject={exhibitionProject} />
      </Box>
    </>
  );
}

export { PropsalDetail };
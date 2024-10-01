import {
	faGlobeAfrica,
	faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	Box,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlanetCard({ data }) {
	const navigate = useNavigate();
	return (
		<Card
			variant="outlined"
			sx={{ height: 'auto', display: 'flex', flexDirection: 'column' }}
		>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography variant="h5" component="div" gutterBottom>
					Planet Name: {data?.name}
				</Typography>
				<Box sx={{ mt: 2 }}>
					<Typography variant="body2">
						Discovery Year: {data?.disc_year || 'N/A'}
					</Typography>
					<Typography variant="body2">
						Discovery Method: {data?.discover_method || 'N/A'}
					</Typography>
					<Typography variant="body2">
						Planet Radius (in units of radius of the Earth):{' '}
						{data?.pl_rade || 'N/A'} 🌍
					</Typography>
					{/* Add more planet details here */}
				</Box>
			</CardContent>
			<CardActions>
				<Button
					onClick={() => {
						navigate(`/stars/${data.ra}/${data.dec}`);
					}}
					size="small"
				>
					See Sky
				</Button>
			</CardActions>
		</Card>
	);
}

export default PlanetCard;

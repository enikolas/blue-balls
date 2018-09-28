import Fluminense from '../ImageTeam/fluminense.svg';
import CAMineiro from '../ImageTeam/atletico_mg.svg';
import Gremio from '../ImageTeam/gremio.png';
import CAParanaense from '../ImageTeam/atletico_pr.svg';
import Palmeiras from '../ImageTeam/palmeiras.png';
import Botafogo from '../ImageTeam/botafogo.svg';
import Cruzeiro from '../ImageTeam/cruzeiro.png';
import Chapecoense from '../ImageTeam/chapecoense.svg';
import SaoPaulo from '../ImageTeam/sao_paulo.png';
import Bahia from '../ImageTeam/bahia.svg';
import Sport from '../ImageTeam/sport.png';
import Corinthians from '../ImageTeam/corinthians.png';
import Vasco from '../ImageTeam/vasco.svg';
import Vitoria from '../ImageTeam/vitoria.png';
import Flamengo from '../ImageTeam/flamengo.png';
import Ceara from '../ImageTeam/ceara.svg';
import AmericaMG from '../ImageTeam/america_mg.svg';
import Parana from '../ImageTeam/parana.png';
import Internacional from '../ImageTeam/internacional.svg';
import Santos from '../ImageTeam/santos.png';
import DefaultImage from '../ImageTeam/defaultimage.svg';

const crestHandler = (tla) => {
	let crest;
	switch (tla) {
	case 'FLU':
		crest = Fluminense;
		break;
	case 'CAM':
		crest = CAMineiro;
		break;
	case 'GRE':
		crest = Gremio;
		break;
	case 'CAP':
		crest = CAParanaense;
		break;
	case 'PAL':
		crest = Palmeiras;
		break;
	case 'BOT':
		crest = Botafogo;
		break;
	case 'CRU':
		crest = Cruzeiro;
		break;
	case 'CHA':
		crest = Chapecoense;
		break;
	case 'SAO':
		crest = SaoPaulo;
		break;
	case 'BAH':
		crest = Bahia;
		break;
	case 'SPO':
		crest = Sport;
		break;
	case 'COR':
		crest = Corinthians;
		break;
	case 'VAS':
		crest = Vasco;
		break;
	case 'VIT':
		crest = Vitoria;
		break;
	case 'FLA':
		crest = Flamengo;
		break;
	case 'CEA':
		crest = Ceara;
		break;
	case 'AME':
		crest = AmericaMG;
		break;
	case 'PAR':
		crest = Parana;
		break;
	case 'INT':
		crest = Internacional;
		break;
	case 'SAN':
		crest = Santos;
		break;
	default:
		crest = DefaultImage;
		break;
	}

	return crest;
};

export default crestHandler;

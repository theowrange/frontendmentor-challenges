import reactionIcon from '../assets/solutions/results-summary/icon-reaction.svg';
import memoryIcon from '../assets/solutions/results-summary/icon-memory.svg';
import verbalIcon from '../assets/solutions/results-summary/icon-verbal.svg';
import visualIcon from '../assets/solutions/results-summary/icon-visual.svg';

const resultsSummary = [
  {
    category: 'Reaction',
    score: 80,
    icon: reactionIcon,
    color: 'red',
  },
  {
    category: 'Memory',
    score: 92,
    icon: memoryIcon,
    color: 'yellow',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: verbalIcon,
    color: 'green',
  },
  {
    category: 'Visual',
    score: 72,
    icon: visualIcon,
    color: 'blue',
  },
];

export default resultsSummary;

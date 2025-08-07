import { useInView } from 'react-intersection-observer';

const useScrollAnimation = (options = { triggerOnce: true, threshold: 0.3 }) => {
  const { ref, inView } = useInView(options);

  return { ref, inView };
};

export default useScrollAnimation;
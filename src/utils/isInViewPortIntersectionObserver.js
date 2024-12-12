const checkInViewIntersectionObserver = ({
  target,
  options = { root: null, rootMargin: '0%', threshold: 0 },
  callback,
  freezeOnceVisible = false,
}) => {
  const _funCallback = (entries, observer) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        callback();
        // If true, we will unobserve
        if (freezeOnceVisible) {
          observer.unobserve(entry.target);
        }
      }
      return true;
    });
  };

  // _checkBrowserSupport-----
  if (typeof window.IntersectionObserver === 'undefined') {
    console.error(
      'window.IntersectionObserver === undefined! => Your Browser is Notsupport'
    );
    return;
  }

  const observer = new IntersectionObserver(_funCallback, options);
  if (target) observer.observe(target);
};

export default checkInViewIntersectionObserver;

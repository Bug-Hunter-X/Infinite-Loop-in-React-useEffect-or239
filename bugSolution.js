```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: Add count as a dependency to prevent the infinite loop. 
    // This effect will only run once on mount.
    // The effect will not re-run since count will not be changed by this effect
  }, [count]);
  //Or we can avoid the infinite loop by not even having the useEffect run on mount
  // useEffect(() => {
  //   setCount(count + 1);
  // }, []);

  return <div>Count: {count}</div>;
}
```
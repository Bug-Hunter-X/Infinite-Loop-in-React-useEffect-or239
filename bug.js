```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the effect depends on 'count',
    // which is updated by the effect itself.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```
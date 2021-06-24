/**
 * 用Hooks实现类似于this.setState({a:1}, cb)
 * 自定义Hooks：
 * 输入useStateHooks()
 * 返回[value, stateValue]
 */

function useStateHooks() {
  const [value, setValue] = useState(null);

  const ref = useRef(null);

  const fn = useCallback(
    (arg, callback) => {
      setValue(arg);
      ref.current = callback;
    },
    [arg]
  );

  useEffect(() => {
    ref.current();
  }, [ref.current]);

  return [value, fn];
}

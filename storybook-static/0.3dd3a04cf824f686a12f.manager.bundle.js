/* eslint-disable */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    2266(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(
          __webpack_exports__,
          'WithTooltipPure',
          () => WithTooltip_WithTooltipPure
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'WithToolTipState',
          () => WithTooltip_WithToolTipState
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'WithTooltip',
          () => WithTooltip_WithToolTipState
        );
      __webpack_require__(100),
        __webpack_require__(782),
        __webpack_require__(99),
        __webpack_require__(21),
        __webpack_require__(75),
        __webpack_require__(56),
        __webpack_require__(43),
        __webpack_require__(76),
        __webpack_require__(54),
        __webpack_require__(64),
        __webpack_require__(57),
        __webpack_require__(113),
        __webpack_require__(53),
        __webpack_require__(1544);
      const react = __webpack_require__(0);
      const react_default = __webpack_require__.n(react);
      const esm = __webpack_require__(1);
      const global_window = __webpack_require__(4);
      const window_default = __webpack_require__.n(global_window);
      const objectWithoutPropertiesLoose = __webpack_require__(139);
      const esm_extends = __webpack_require__(5);
      const inheritsLoose = __webpack_require__(568);
      const react_dom = __webpack_require__(466);
      const ManagerReferenceNodeContext = react.createContext();
      const ManagerReferenceNodeSetterContext = react.createContext();
      function Manager(_ref) {
        const { children } = _ref;
        const _React$useState = react.useState(null);
        const referenceNode = _React$useState[0];
        const setReferenceNode = _React$useState[1];
        const hasUnmounted = react.useRef(!1);
        react.useEffect(
          () =>
            function () {
              hasUnmounted.current = !0;
            },
          []
        );
        const handleSetReferenceNode = react.useCallback((node) => {
          hasUnmounted.current || setReferenceNode(node);
        }, []);
        return react.createElement(
          ManagerReferenceNodeContext.Provider,
          { value: referenceNode },
          react.createElement(
            ManagerReferenceNodeSetterContext.Provider,
            { value: handleSetReferenceNode },
            children
          )
        );
      }
      const unwrapArray = function unwrapArray(arg) {
        return Array.isArray(arg) ? arg[0] : arg;
      };
      const safeInvoke = function safeInvoke(fn) {
        if (typeof fn === 'function') {
          for (
            var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
            _key < _len;
            _key++
          )
            args[_key - 1] = arguments[_key];
          return fn.apply(void 0, args);
        }
      };
      const setRef = function setRef(ref, node) {
        if (typeof ref === 'function') return safeInvoke(ref, node);
        ref != null && (ref.current = node);
      };
      const fromEntries = function fromEntries(entries) {
        return entries.reduce((acc, _ref) => {
          const key = _ref[0];
          const value = _ref[1];
          return (acc[key] = value), acc;
        }, {});
      };
      const useIsomorphicLayoutEffect =
        typeof window !== 'undefined' && window.document && window.document.createElement
          ? react.useLayoutEffect
          : react.useEffect;
      function getWindow(node) {
        if (node == null) return window;
        if (node.toString() !== '[object Window]') {
          const { ownerDocument } = node;
          return (ownerDocument && ownerDocument.defaultView) || window;
        }
        return node;
      }
      function isElement(node) {
        return node instanceof getWindow(node).Element || node instanceof Element;
      }
      function isHTMLElement(node) {
        return node instanceof getWindow(node).HTMLElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        return (
          typeof ShadowRoot !== 'undefined' &&
          (node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot)
        );
      }
      const math_max = Math.max;
      const math_min = Math.min;
      const { round } = Math;
      function getBoundingClientRect(element, includeScale) {
        void 0 === includeScale && (includeScale = !1);
        const rect = element.getBoundingClientRect();
        let scaleX = 1;
        let scaleY = 1;
        if (isHTMLElement(element) && includeScale) {
          const { offsetHeight } = element;
          const { offsetWidth } = element;
          offsetWidth > 0 && (scaleX = round(rect.width) / offsetWidth || 1),
            offsetHeight > 0 && (scaleY = round(rect.height) / offsetHeight || 1);
        }
        return {
          width: rect.width / scaleX,
          height: rect.height / scaleY,
          top: rect.top / scaleY,
          right: rect.right / scaleX,
          bottom: rect.bottom / scaleY,
          left: rect.left / scaleX,
          x: rect.left / scaleX,
          y: rect.top / scaleY,
        };
      }
      function getWindowScroll(node) {
        const win = getWindow(node);
        return { scrollLeft: win.pageXOffset, scrollTop: win.pageYOffset };
      }
      function getNodeName(element) {
        return element ? (element.nodeName || '').toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement(element) ? element.ownerDocument : element.document) || window.document)
          .documentElement;
      }
      function getWindowScrollBarX(element) {
        return (
          getBoundingClientRect(getDocumentElement(element)).left +
          getWindowScroll(element).scrollLeft
        );
      }
      function getComputedStyle(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        const _getComputedStyle = getComputedStyle(element);
        const { overflow } = _getComputedStyle;
        const { overflowX } = _getComputedStyle;
        const { overflowY } = _getComputedStyle;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        void 0 === isFixed && (isFixed = !1);
        const isOffsetParentAnElement = isHTMLElement(offsetParent);
        const offsetParentIsScaled =
          isHTMLElement(offsetParent) &&
          (function isElementScaled(element) {
            const rect = element.getBoundingClientRect();
            const scaleX = round(rect.width) / element.offsetWidth || 1;
            const scaleY = round(rect.height) / element.offsetHeight || 1;
            return scaleX !== 1 || scaleY !== 1;
          })(offsetParent);
        const documentElement = getDocumentElement(offsetParent);
        const rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
        let scroll = { scrollLeft: 0, scrollTop: 0 };
        let offsets = { x: 0, y: 0 };
        return (
          (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) &&
            ((getNodeName(offsetParent) !== 'body' || isScrollParent(documentElement)) &&
              (scroll = (function getNodeScroll(node) {
                return node !== getWindow(node) && isHTMLElement(node)
                  ? (function getHTMLElementScroll(element) {
                      return {
                        scrollLeft: element.scrollLeft,
                        scrollTop: element.scrollTop,
                      };
                    })(node)
                  : getWindowScroll(node);
              })(offsetParent)),
            isHTMLElement(offsetParent)
              ? (((offsets = getBoundingClientRect(offsetParent, !0)).x += offsetParent.clientLeft),
                (offsets.y += offsetParent.clientTop))
              : documentElement && (offsets.x = getWindowScrollBarX(documentElement))),
          {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height,
          }
        );
      }
      function getLayoutRect(element) {
        const clientRect = getBoundingClientRect(element);
        let width = element.offsetWidth;
        let height = element.offsetHeight;
        return (
          Math.abs(clientRect.width - width) <= 1 && (width = clientRect.width),
          Math.abs(clientRect.height - height) <= 1 && (height = clientRect.height),
          {
            x: element.offsetLeft,
            y: element.offsetTop,
            width,
            height,
          }
        );
      }
      function getParentNode(element) {
        return getNodeName(element) === 'html'
          ? element
          : element.assignedSlot ||
              element.parentNode ||
              (isShadowRoot(element) ? element.host : null) ||
              getDocumentElement(element);
      }
      function getScrollParent(node) {
        return ['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0
          ? node.ownerDocument.body
          : isHTMLElement(node) && isScrollParent(node)
          ? node
          : getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        let _element$ownerDocumen;
        void 0 === list && (list = []);
        const scrollParent = getScrollParent(element);
        const isBody =
          scrollParent ===
          ((_element$ownerDocumen = element.ownerDocument) == null
            ? void 0
            : _element$ownerDocumen.body);
        const win = getWindow(scrollParent);
        const target = isBody
          ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : [])
          : scrollParent;
        const updatedList = list.concat(target);
        return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
      }
      function isTableElement(element) {
        return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        return isHTMLElement(element) && getComputedStyle(element).position !== 'fixed'
          ? element.offsetParent
          : null;
      }
      function getOffsetParent(element) {
        for (
          var window = getWindow(element), offsetParent = getTrueOffsetParent(element);
          offsetParent &&
          isTableElement(offsetParent) &&
          getComputedStyle(offsetParent).position === 'static';

        )
          offsetParent = getTrueOffsetParent(offsetParent);
        return offsetParent &&
          (getNodeName(offsetParent) === 'html' ||
            (getNodeName(offsetParent) === 'body' &&
              getComputedStyle(offsetParent).position === 'static'))
          ? window
          : offsetParent ||
              (function getContainingBlock(element) {
                const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
                if (
                  navigator.userAgent.indexOf('Trident') !== -1 &&
                  isHTMLElement(element) &&
                  getComputedStyle(element).position === 'fixed'
                )
                  return null;
                let currentNode = getParentNode(element);
                for (
                  isShadowRoot(currentNode) && (currentNode = currentNode.host);
                  isHTMLElement(currentNode) &&
                  ['html', 'body'].indexOf(getNodeName(currentNode)) < 0;

                ) {
                  const css = getComputedStyle(currentNode);
                  if (
                    css.transform !== 'none' ||
                    css.perspective !== 'none' ||
                    css.contain === 'paint' ||
                    ['transform', 'perspective'].indexOf(css.willChange) !== -1 ||
                    (isFirefox && css.willChange === 'filter') ||
                    (isFirefox && css.filter && css.filter !== 'none')
                  )
                    return currentNode;
                  currentNode = currentNode.parentNode;
                }
                return null;
              })(element) ||
              window;
      }
      const enums = __webpack_require__(2255);
      function order(modifiers) {
        const map = new Map();
        const visited = new Set();
        const result = [];
        function sort(modifier) {
          visited.add(modifier.name),
            [].concat(modifier.requires || [], modifier.requiresIfExists || []).forEach((dep) => {
              if (!visited.has(dep)) {
                const depModifier = map.get(dep);
                depModifier && sort(depModifier);
              }
            }),
            result.push(modifier);
        }
        return (
          modifiers.forEach((modifier) => {
            map.set(modifier.name, modifier);
          }),
          modifiers.forEach((modifier) => {
            visited.has(modifier.name) || sort(modifier);
          }),
          result
        );
      }
      const DEFAULT_OPTIONS = {
        placement: 'bottom',
        modifiers: [],
        strategy: 'absolute',
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
          args[_key] = arguments[_key];
        return !args.some(
          (element) => !(element && typeof element.getBoundingClientRect === 'function')
        );
      }
      function popperGenerator(generatorOptions) {
        void 0 === generatorOptions && (generatorOptions = {});
        const _generatorOptions = generatorOptions;
        const _generatorOptions$def = _generatorOptions.defaultModifiers;
        const defaultModifiers = void 0 === _generatorOptions$def ? [] : _generatorOptions$def;
        const _generatorOptions$def2 = _generatorOptions.defaultOptions;
        const defaultOptions =
          void 0 === _generatorOptions$def2 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper(reference, popper, options) {
          void 0 === options && (options = defaultOptions);
          let fn;
          let pending;
          let state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: { ...DEFAULT_OPTIONS, ...defaultOptions },
            modifiersData: {},
            elements: { reference, popper },
            attributes: {},
            styles: {},
          };
          let effectCleanupFns = [];
          let isDestroyed = !1;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              const options =
                typeof setOptionsAction === 'function'
                  ? setOptionsAction(state.options)
                  : setOptionsAction;
              cleanupModifierEffects(),
                (state.options = {
                  ...defaultOptions,
                  ...state.options,
                  ...options,
                }),
                (state.scrollParents = {
                  reference: isElement(reference)
                    ? listScrollParents(reference)
                    : reference.contextElement
                    ? listScrollParents(reference.contextElement)
                    : [],
                  popper: listScrollParents(popper),
                });
              const orderedModifiers = (function orderModifiers(modifiers) {
                const orderedModifiers = order(modifiers);
                return enums.g.reduce(
                  (acc, phase) =>
                    acc.concat(orderedModifiers.filter((modifier) => modifier.phase === phase)),
                  []
                );
              })(
                (function mergeByName(modifiers) {
                  const merged = modifiers.reduce((merged, current) => {
                    const existing = merged[current.name];
                    return (
                      (merged[current.name] = existing
                        ? {
                            ...existing,
                            ...current,
                            options: {
                              ...existing.options,
                              ...current.options,
                            },
                            data: {
                              ...existing.data,
                              ...current.data,
                            },
                          }
                        : current),
                      merged
                    );
                  }, {});
                  return Object.keys(merged).map((key) => merged[key]);
                })([].concat(defaultModifiers, state.options.modifiers))
              );
              return (
                (state.orderedModifiers = orderedModifiers.filter((m) => m.enabled)),
                (function runModifierEffects() {
                  state.orderedModifiers.forEach((_ref3) => {
                    const { name } = _ref3;
                    const _ref3$options = _ref3.options;
                    const options = void 0 === _ref3$options ? {} : _ref3$options;
                    const { effect } = _ref3;
                    if (typeof effect === 'function') {
                      const cleanupFn = effect({
                        state,
                        name,
                        instance,
                        options,
                      });
                      const noopFn = function noopFn() {};
                      effectCleanupFns.push(cleanupFn || noopFn);
                    }
                  });
                })(),
                instance.update()
              );
            },
            forceUpdate: function forceUpdate() {
              if (!isDestroyed) {
                const _state$elements = state.elements;
                const { reference } = _state$elements;
                const { popper } = _state$elements;
                if (areValidElements(reference, popper)) {
                  (state.rects = {
                    reference: getCompositeRect(
                      reference,
                      getOffsetParent(popper),
                      state.options.strategy === 'fixed'
                    ),
                    popper: getLayoutRect(popper),
                  }),
                    (state.reset = !1),
                    (state.placement = state.options.placement),
                    state.orderedModifiers.forEach(
                      (modifier) =>
                        (state.modifiersData[modifier.name] = {
                          ...modifier.data,
                        })
                    );
                  for (let index = 0; index < state.orderedModifiers.length; index++)
                    if (!0 !== state.reset) {
                      const _state$orderedModifie = state.orderedModifiers[index];
                      const { fn } = _state$orderedModifie;
                      const _state$orderedModifie2 = _state$orderedModifie.options;
                      const _options =
                        void 0 === _state$orderedModifie2 ? {} : _state$orderedModifie2;
                      const { name } = _state$orderedModifie;
                      typeof fn === 'function' &&
                        (state =
                          fn({
                            state,
                            options: _options,
                            name,
                            instance,
                          }) || state);
                    } else (state.reset = !1), (index = -1);
                }
              }
            },
            update:
              ((fn = function () {
                return new Promise((resolve) => {
                  instance.forceUpdate(), resolve(state);
                });
              }),
              function () {
                return (
                  pending ||
                    (pending = new Promise((resolve) => {
                      Promise.resolve().then(() => {
                        (pending = void 0), resolve(fn());
                      });
                    })),
                  pending
                );
              }),
            destroy: function destroy() {
              cleanupModifierEffects(), (isDestroyed = !0);
            },
          };
          if (!areValidElements(reference, popper)) return instance;
          function cleanupModifierEffects() {
            effectCleanupFns.forEach((fn) => fn()), (effectCleanupFns = []);
          }
          return (
            instance.setOptions(options).then((state) => {
              !isDestroyed && options.onFirstUpdate && options.onFirstUpdate(state);
            }),
            instance
          );
        };
      }
      const passive = { passive: !0 };
      function getBasePlacement(placement) {
        return placement.split('-')[0];
      }
      function getVariation(placement) {
        return placement.split('-')[1];
      }
      function getMainAxisFromPlacement(placement) {
        return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
      }
      function computeOffsets(_ref) {
        let offsets;
        const { reference } = _ref;
        const { element } = _ref;
        const { placement } = _ref;
        const basePlacement = placement ? getBasePlacement(placement) : null;
        const variation = placement ? getVariation(placement) : null;
        const commonX = reference.x + reference.width / 2 - element.width / 2;
        const commonY = reference.y + reference.height / 2 - element.height / 2;
        switch (basePlacement) {
          case enums.m:
            offsets = { x: commonX, y: reference.y - element.height };
            break;
          case enums.c:
            offsets = { x: commonX, y: reference.y + reference.height };
            break;
          case enums.k:
            offsets = { x: reference.x + reference.width, y: commonY };
            break;
          case enums.f:
            offsets = { x: reference.x - element.width, y: commonY };
            break;
          default:
            offsets = { x: reference.x, y: reference.y };
        }
        const mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          const len = mainAxis === 'y' ? 'height' : 'width';
          switch (variation) {
            case enums.l:
              offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
              break;
            case enums.e:
              offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          }
        }
        return offsets;
      }
      const unsetSides = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      };
      function mapToStyles(_ref2) {
        let _Object$assign2;
        const { popper } = _ref2;
        const { popperRect } = _ref2;
        const { placement } = _ref2;
        const { variation } = _ref2;
        const { offsets } = _ref2;
        const { position } = _ref2;
        const { gpuAcceleration } = _ref2;
        const { adaptive } = _ref2;
        const { roundOffsets } = _ref2;
        const { isFixed } = _ref2;
        const _offsets$x = offsets.x;
        let x = void 0 === _offsets$x ? 0 : _offsets$x;
        const _offsets$y = offsets.y;
        let y = void 0 === _offsets$y ? 0 : _offsets$y;
        const _ref3 = typeof roundOffsets === 'function' ? roundOffsets({ x, y }) : { x, y };
        (x = _ref3.x), (y = _ref3.y);
        const hasX = offsets.hasOwnProperty('x');
        const hasY = offsets.hasOwnProperty('y');
        let sideX = enums.f;
        let sideY = enums.m;
        const win = window;
        if (adaptive) {
          let offsetParent = getOffsetParent(popper);
          let heightProp = 'clientHeight';
          let widthProp = 'clientWidth';
          if (
            (offsetParent === getWindow(popper) &&
              getComputedStyle((offsetParent = getDocumentElement(popper))).position !== 'static' &&
              position === 'absolute' &&
              ((heightProp = 'scrollHeight'), (widthProp = 'scrollWidth')),
            (offsetParent = offsetParent),
            placement === enums.m ||
              ((placement === enums.f || placement === enums.k) && variation === enums.e))
          )
            (sideY = enums.c),
              (y -=
                (isFixed && offsetParent === win && win.visualViewport
                  ? win.visualViewport.height
                  : offsetParent[heightProp]) - popperRect.height),
              (y *= gpuAcceleration ? 1 : -1);
          if (
            placement === enums.f ||
            ((placement === enums.m || placement === enums.c) && variation === enums.e)
          )
            (sideX = enums.k),
              (x -=
                (isFixed && offsetParent === win && win.visualViewport
                  ? win.visualViewport.width
                  : offsetParent[widthProp]) - popperRect.width),
              (x *= gpuAcceleration ? 1 : -1);
        }
        let _Object$assign;
        const commonStyles = {
          position,
          ...(adaptive && unsetSides),
        };
        const _ref4 =
          !0 === roundOffsets
            ? (function roundOffsetsByDPR(_ref) {
                const { x } = _ref;
                const { y } = _ref;
                const dpr = window.devicePixelRatio || 1;
                return {
                  x: round(x * dpr) / dpr || 0,
                  y: round(y * dpr) / dpr || 0,
                };
              })({ x, y })
            : { x, y };
        return (
          (x = _ref4.x),
          (y = _ref4.y),
          gpuAcceleration
            ? {
                ...commonStyles,
                ...(((_Object$assign = {})[sideY] = hasY ? '0' : ''),
                (_Object$assign[sideX] = hasX ? '0' : ''),
                (_Object$assign.transform =
                  (win.devicePixelRatio || 1) <= 1
                    ? `translate(${x}px, ${y}px)`
                    : `translate3d(${x}px, ${y}px, 0)`),
                _Object$assign),
              }
            : {
                ...commonStyles,
                ...(((_Object$assign2 = {})[sideY] = hasY ? `${y}px` : ''),
                (_Object$assign2[sideX] = hasX ? `${x}px` : ''),
                (_Object$assign2.transform = ''),
                _Object$assign2),
              }
        );
      }
      const hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom',
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, (matched) => hash[matched]);
      }
      const getOppositeVariationPlacement_hash = { start: 'end', end: 'start' };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(
          /start|end/g,
          (matched) => getOppositeVariationPlacement_hash[matched]
        );
      }
      function contains(parent, child) {
        const rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) return !0;
        if (rootNode && isShadowRoot(rootNode)) {
          let next = child;
          do {
            if (next && parent.isSameNode(next)) return !0;
            next = next.parentNode || next.host;
          } while (next);
        }
        return !1;
      }
      function rectToClientRect(rect) {
        return {
          ...rect,
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height,
        };
      }
      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === enums.o
          ? rectToClientRect(
              (function getViewportRect(element) {
                const win = getWindow(element);
                const html = getDocumentElement(element);
                const { visualViewport } = win;
                let width = html.clientWidth;
                let height = html.clientHeight;
                let x = 0;
                let y = 0;
                return (
                  visualViewport &&
                    ((width = visualViewport.width),
                    (height = visualViewport.height),
                    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                      ((x = visualViewport.offsetLeft), (y = visualViewport.offsetTop))),
                  {
                    width,
                    height,
                    x: x + getWindowScrollBarX(element),
                    y,
                  }
                );
              })(element)
            )
          : isElement(clippingParent)
          ? (function getInnerBoundingClientRect(element) {
              const rect = getBoundingClientRect(element);
              return (
                (rect.top += element.clientTop),
                (rect.left += element.clientLeft),
                (rect.bottom = rect.top + element.clientHeight),
                (rect.right = rect.left + element.clientWidth),
                (rect.width = element.clientWidth),
                (rect.height = element.clientHeight),
                (rect.x = rect.left),
                (rect.y = rect.top),
                rect
              );
            })(clippingParent)
          : rectToClientRect(
              (function getDocumentRect(element) {
                let _element$ownerDocumen;
                const html = getDocumentElement(element);
                const winScroll = getWindowScroll(element);
                const body =
                  (_element$ownerDocumen = element.ownerDocument) == null
                    ? void 0
                    : _element$ownerDocumen.body;
                const width = math_max(
                  html.scrollWidth,
                  html.clientWidth,
                  body ? body.scrollWidth : 0,
                  body ? body.clientWidth : 0
                );
                const height = math_max(
                  html.scrollHeight,
                  html.clientHeight,
                  body ? body.scrollHeight : 0,
                  body ? body.clientHeight : 0
                );
                let x = -winScroll.scrollLeft + getWindowScrollBarX(element);
                const y = -winScroll.scrollTop;
                return (
                  getComputedStyle(body || html).direction === 'rtl' &&
                    (x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width),
                  { width, height, x, y }
                );
              })(getDocumentElement(element))
            );
      }
      function getClippingRect(element, boundary, rootBoundary) {
        const mainClippingParents =
          boundary === 'clippingParents'
            ? (function getClippingParents(element) {
                const clippingParents = listScrollParents(getParentNode(element));
                const clipperElement =
                  ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0 &&
                  isHTMLElement(element)
                    ? getOffsetParent(element)
                    : element;
                return isElement(clipperElement)
                  ? clippingParents.filter(
                      (clippingParent) =>
                        isElement(clippingParent) &&
                        contains(clippingParent, clipperElement) &&
                        getNodeName(clippingParent) !== 'body'
                    )
                  : [];
              })(element)
            : [].concat(boundary);
        const clippingParents = [].concat(mainClippingParents, [rootBoundary]);
        const firstClippingParent = clippingParents[0];
        const clippingRect = clippingParents.reduce((accRect, clippingParent) => {
          const rect = getClientRectFromMixedType(element, clippingParent);
          return (
            (accRect.top = math_max(rect.top, accRect.top)),
            (accRect.right = math_min(rect.right, accRect.right)),
            (accRect.bottom = math_min(rect.bottom, accRect.bottom)),
            (accRect.left = math_max(rect.left, accRect.left)),
            accRect
          );
        }, getClientRectFromMixedType(element, firstClippingParent));
        return (
          (clippingRect.width = clippingRect.right - clippingRect.left),
          (clippingRect.height = clippingRect.bottom - clippingRect.top),
          (clippingRect.x = clippingRect.left),
          (clippingRect.y = clippingRect.top),
          clippingRect
        );
      }
      function mergePaddingObject(paddingObject) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...paddingObject,
        };
      }
      function expandToHashMap(value, keys) {
        return keys.reduce((hashMap, key) => ((hashMap[key] = value), hashMap), {});
      }
      function detectOverflow(state, options) {
        void 0 === options && (options = {});
        const _options = options;
        const _options$placement = _options.placement;
        const placement = void 0 === _options$placement ? state.placement : _options$placement;
        const _options$boundary = _options.boundary;
        const boundary = void 0 === _options$boundary ? enums.d : _options$boundary;
        const _options$rootBoundary = _options.rootBoundary;
        const rootBoundary = void 0 === _options$rootBoundary ? enums.o : _options$rootBoundary;
        const _options$elementConte = _options.elementContext;
        const elementContext = void 0 === _options$elementConte ? enums.i : _options$elementConte;
        const _options$altBoundary = _options.altBoundary;
        const altBoundary = void 0 !== _options$altBoundary && _options$altBoundary;
        const _options$padding = _options.padding;
        const padding = void 0 === _options$padding ? 0 : _options$padding;
        const paddingObject = mergePaddingObject(
          typeof padding !== 'number' ? padding : expandToHashMap(padding, enums.b)
        );
        const altContext = elementContext === enums.i ? enums.j : enums.i;
        const popperRect = state.rects.popper;
        const element = state.elements[altBoundary ? altContext : elementContext];
        const clippingClientRect = getClippingRect(
          isElement(element)
            ? element
            : element.contextElement || getDocumentElement(state.elements.popper),
          boundary,
          rootBoundary
        );
        const referenceClientRect = getBoundingClientRect(state.elements.reference);
        const popperOffsets = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: 'absolute',
          placement,
        });
        const popperClientRect = rectToClientRect({
          ...popperRect,
          ...popperOffsets,
        });
        const elementClientRect =
          elementContext === enums.i ? popperClientRect : referenceClientRect;
        const overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right,
        };
        const offsetData = state.modifiersData.offset;
        if (elementContext === enums.i && offsetData) {
          const offset = offsetData[placement];
          Object.keys(overflowOffsets).forEach((key) => {
            const multiply = [enums.k, enums.c].indexOf(key) >= 0 ? 1 : -1;
            const axis = [enums.m, enums.c].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      function within(min, value, max) {
        return math_max(min, math_min(value, max));
      }
      function getSideOffsets(overflow, rect, preventedOffsets) {
        return (
          void 0 === preventedOffsets && (preventedOffsets = { x: 0, y: 0 }),
          {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x,
          }
        );
      }
      function isAnySideFullyClipped(overflow) {
        return [enums.m, enums.k, enums.c, enums.f].some((side) => overflow[side] >= 0);
      }
      const popper_createPopper = popperGenerator({
        defaultModifiers: [
          {
            name: 'eventListeners',
            enabled: !0,
            phase: 'write',
            fn: function fn() {},
            effect: function effect(_ref) {
              const { state } = _ref;
              const { instance } = _ref;
              const { options } = _ref;
              const _options$scroll = options.scroll;
              const scroll = void 0 === _options$scroll || _options$scroll;
              const _options$resize = options.resize;
              const resize = void 0 === _options$resize || _options$resize;
              const window = getWindow(state.elements.popper);
              const scrollParents = [].concat(
                state.scrollParents.reference,
                state.scrollParents.popper
              );
              return (
                scroll &&
                  scrollParents.forEach((scrollParent) => {
                    scrollParent.addEventListener('scroll', instance.update, passive);
                  }),
                resize && window.addEventListener('resize', instance.update, passive),
                function () {
                  scroll &&
                    scrollParents.forEach((scrollParent) => {
                      scrollParent.removeEventListener('scroll', instance.update, passive);
                    }),
                    resize && window.removeEventListener('resize', instance.update, passive);
                }
              );
            },
            data: {},
          },
          {
            name: 'popperOffsets',
            enabled: !0,
            phase: 'read',
            fn: function popperOffsets_popperOffsets(_ref) {
              const { state } = _ref;
              const { name } = _ref;
              state.modifiersData[name] = computeOffsets({
                reference: state.rects.reference,
                element: state.rects.popper,
                strategy: 'absolute',
                placement: state.placement,
              });
            },
            data: {},
          },
          {
            name: 'computeStyles',
            enabled: !0,
            phase: 'beforeWrite',
            fn: function computeStyles(_ref5) {
              const { state } = _ref5;
              const { options } = _ref5;
              const _options$gpuAccelerat = options.gpuAcceleration;
              const gpuAcceleration = void 0 === _options$gpuAccelerat || _options$gpuAccelerat;
              const _options$adaptive = options.adaptive;
              const adaptive = void 0 === _options$adaptive || _options$adaptive;
              const _options$roundOffsets = options.roundOffsets;
              const roundOffsets = void 0 === _options$roundOffsets || _options$roundOffsets;
              const commonStyles = {
                placement: getBasePlacement(state.placement),
                variation: getVariation(state.placement),
                popper: state.elements.popper,
                popperRect: state.rects.popper,
                gpuAcceleration,
                isFixed: state.options.strategy === 'fixed',
              };
              state.modifiersData.popperOffsets != null &&
                (state.styles.popper = {
                  ...state.styles.popper,
                  ...mapToStyles({
                    ...commonStyles,
                    offsets: state.modifiersData.popperOffsets,
                    position: state.options.strategy,
                    adaptive,
                    roundOffsets,
                  }),
                }),
                state.modifiersData.arrow != null &&
                  (state.styles.arrow = {
                    ...state.styles.arrow,
                    ...mapToStyles({
                      ...commonStyles,
                      offsets: state.modifiersData.arrow,
                      position: 'absolute',
                      adaptive: !1,
                      roundOffsets,
                    }),
                  }),
                (state.attributes.popper = {
                  ...state.attributes.popper,
                  'data-popper-placement': state.placement,
                });
            },
            data: {},
          },
          {
            name: 'applyStyles',
            enabled: !0,
            phase: 'write',
            fn: function applyStyles(_ref) {
              const { state } = _ref;
              Object.keys(state.elements).forEach((name) => {
                const style = state.styles[name] || {};
                const attributes = state.attributes[name] || {};
                const element = state.elements[name];
                isHTMLElement(element) &&
                  getNodeName(element) &&
                  (Object.assign(element.style, style),
                  Object.keys(attributes).forEach((name) => {
                    const value = attributes[name];
                    !1 === value
                      ? element.removeAttribute(name)
                      : element.setAttribute(name, !0 === value ? '' : value);
                  }));
              });
            },
            effect: function applyStyles_effect(_ref2) {
              const { state } = _ref2;
              const initialStyles = {
                popper: {
                  position: state.options.strategy,
                  left: '0',
                  top: '0',
                  margin: '0',
                },
                arrow: { position: 'absolute' },
                reference: {},
              };
              return (
                Object.assign(state.elements.popper.style, initialStyles.popper),
                (state.styles = initialStyles),
                state.elements.arrow &&
                  Object.assign(state.elements.arrow.style, initialStyles.arrow),
                function () {
                  Object.keys(state.elements).forEach((name) => {
                    const element = state.elements[name];
                    const attributes = state.attributes[name] || {};
                    const style = Object.keys(
                      state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]
                    ).reduce((style, property) => ((style[property] = ''), style), {});
                    isHTMLElement(element) &&
                      getNodeName(element) &&
                      (Object.assign(element.style, style),
                      Object.keys(attributes).forEach((attribute) => {
                        element.removeAttribute(attribute);
                      }));
                  });
                }
              );
            },
            requires: ['computeStyles'],
          },
          {
            name: 'offset',
            enabled: !0,
            phase: 'main',
            requires: ['popperOffsets'],
            fn: function offset_offset(_ref2) {
              const { state } = _ref2;
              const { options } = _ref2;
              const { name } = _ref2;
              const _options$offset = options.offset;
              const offset = void 0 === _options$offset ? [0, 0] : _options$offset;
              const data = enums.h.reduce(
                (acc, placement) => (
                  (acc[placement] = (function distanceAndSkiddingToXY(placement, rects, offset) {
                    const basePlacement = getBasePlacement(placement);
                    const invertDistance = [enums.f, enums.m].indexOf(basePlacement) >= 0 ? -1 : 1;
                    const _ref =
                      typeof offset === 'function' ? offset({ ...rects, placement }) : offset;
                    let skidding = _ref[0];
                    let distance = _ref[1];
                    return (
                      (skidding = skidding || 0),
                      (distance = (distance || 0) * invertDistance),
                      [enums.f, enums.k].indexOf(basePlacement) >= 0
                        ? { x: distance, y: skidding }
                        : { x: skidding, y: distance }
                    );
                  })(placement, state.rects, offset)),
                  acc
                ),
                {}
              );
              const _data$state$placement = data[state.placement];
              const { x } = _data$state$placement;
              const { y } = _data$state$placement;
              state.modifiersData.popperOffsets != null &&
                ((state.modifiersData.popperOffsets.x += x),
                (state.modifiersData.popperOffsets.y += y)),
                (state.modifiersData[name] = data);
            },
          },
          {
            name: 'flip',
            enabled: !0,
            phase: 'main',
            fn: function flip(_ref) {
              const { state } = _ref;
              const { options } = _ref;
              const { name } = _ref;
              if (!state.modifiersData[name]._skip) {
                for (
                  var _options$mainAxis = options.mainAxis,
                    checkMainAxis = void 0 === _options$mainAxis || _options$mainAxis,
                    _options$altAxis = options.altAxis,
                    checkAltAxis = void 0 === _options$altAxis || _options$altAxis,
                    specifiedFallbackPlacements = options.fallbackPlacements,
                    { padding } = options,
                    { boundary } = options,
                    { rootBoundary } = options,
                    { altBoundary } = options,
                    _options$flipVariatio = options.flipVariations,
                    flipVariations = void 0 === _options$flipVariatio || _options$flipVariatio,
                    { allowedAutoPlacements } = options,
                    preferredPlacement = state.options.placement,
                    basePlacement = getBasePlacement(preferredPlacement),
                    fallbackPlacements =
                      specifiedFallbackPlacements ||
                      (basePlacement === preferredPlacement || !flipVariations
                        ? [getOppositePlacement(preferredPlacement)]
                        : (function getExpandedFallbackPlacements(placement) {
                            if (getBasePlacement(placement) === enums.a) return [];
                            const oppositePlacement = getOppositePlacement(placement);
                            return [
                              getOppositeVariationPlacement(placement),
                              oppositePlacement,
                              getOppositeVariationPlacement(oppositePlacement),
                            ];
                          })(preferredPlacement)),
                    placements = [preferredPlacement].concat(fallbackPlacements).reduce(
                      (acc, placement) =>
                        acc.concat(
                          getBasePlacement(placement) === enums.a
                            ? (function computeAutoPlacement(state, options) {
                                void 0 === options && (options = {});
                                const _options = options;
                                const { placement } = _options;
                                const { boundary } = _options;
                                const { rootBoundary } = _options;
                                const { padding } = _options;
                                const { flipVariations } = _options;
                                const _options$allowedAutoP = _options.allowedAutoPlacements;
                                const allowedAutoPlacements =
                                  void 0 === _options$allowedAutoP
                                    ? enums.h
                                    : _options$allowedAutoP;
                                const variation = getVariation(placement);
                                const placements = variation
                                  ? flipVariations
                                    ? enums.n
                                    : enums.n.filter(
                                        (placement) => getVariation(placement) === variation
                                      )
                                  : enums.b;
                                let allowedPlacements = placements.filter(
                                  (placement) => allowedAutoPlacements.indexOf(placement) >= 0
                                );
                                allowedPlacements.length === 0 && (allowedPlacements = placements);
                                const overflows = allowedPlacements.reduce(
                                  (acc, placement) => (
                                    (acc[placement] = detectOverflow(state, {
                                      placement,
                                      boundary,
                                      rootBoundary,
                                      padding,
                                    })[getBasePlacement(placement)]),
                                    acc
                                  ),
                                  {}
                                );
                                return Object.keys(overflows).sort(
                                  (a, b) => overflows[a] - overflows[b]
                                );
                              })(state, {
                                placement,
                                boundary,
                                rootBoundary,
                                padding,
                                flipVariations,
                                allowedAutoPlacements,
                              })
                            : placement
                        ),
                      []
                    ),
                    referenceRect = state.rects.reference,
                    popperRect = state.rects.popper,
                    checksMap = new Map(),
                    makeFallbackChecks = !0,
                    firstFittingPlacement = placements[0],
                    i = 0;
                  i < placements.length;
                  i++
                ) {
                  const placement = placements[i];
                  const _basePlacement = getBasePlacement(placement);
                  const isStartVariation = getVariation(placement) === enums.l;
                  const isVertical = [enums.m, enums.c].indexOf(_basePlacement) >= 0;
                  const len = isVertical ? 'width' : 'height';
                  const overflow = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    altBoundary,
                    padding,
                  });
                  let mainVariationSide = isVertical
                    ? isStartVariation
                      ? enums.k
                      : enums.f
                    : isStartVariation
                    ? enums.c
                    : enums.m;
                  referenceRect[len] > popperRect[len] &&
                    (mainVariationSide = getOppositePlacement(mainVariationSide));
                  const altVariationSide = getOppositePlacement(mainVariationSide);
                  const checks = [];
                  if (
                    (checkMainAxis && checks.push(overflow[_basePlacement] <= 0),
                    checkAltAxis &&
                      checks.push(
                        overflow[mainVariationSide] <= 0,
                        overflow[altVariationSide] <= 0
                      ),
                    checks.every((check) => check))
                  ) {
                    (firstFittingPlacement = placement), (makeFallbackChecks = !1);
                    break;
                  }
                  checksMap.set(placement, checks);
                }
                if (makeFallbackChecks)
                  for (
                    let _loop = function _loop(_i) {
                        const fittingPlacement = placements.find((placement) => {
                          const checks = checksMap.get(placement);
                          if (checks) return checks.slice(0, _i).every((check) => check);
                        });
                        if (fittingPlacement)
                          return (firstFittingPlacement = fittingPlacement), 'break';
                      },
                      _i = flipVariations ? 3 : 1;
                    _i > 0;
                    _i--
                  ) {
                    if (_loop(_i) === 'break') break;
                  }
                state.placement !== firstFittingPlacement &&
                  ((state.modifiersData[name]._skip = !0),
                  (state.placement = firstFittingPlacement),
                  (state.reset = !0));
              }
            },
            requiresIfExists: ['offset'],
            data: { _skip: !1 },
          },
          {
            name: 'preventOverflow',
            enabled: !0,
            phase: 'main',
            fn: function preventOverflow(_ref) {
              const { state } = _ref;
              const { options } = _ref;
              const { name } = _ref;
              const _options$mainAxis = options.mainAxis;
              const checkMainAxis = void 0 === _options$mainAxis || _options$mainAxis;
              const _options$altAxis = options.altAxis;
              const checkAltAxis = void 0 !== _options$altAxis && _options$altAxis;
              const { boundary } = options;
              const { rootBoundary } = options;
              const { altBoundary } = options;
              const { padding } = options;
              const _options$tether = options.tether;
              const tether = void 0 === _options$tether || _options$tether;
              const _options$tetherOffset = options.tetherOffset;
              const tetherOffset = void 0 === _options$tetherOffset ? 0 : _options$tetherOffset;
              const overflow = detectOverflow(state, {
                boundary,
                rootBoundary,
                padding,
                altBoundary,
              });
              const basePlacement = getBasePlacement(state.placement);
              const variation = getVariation(state.placement);
              const isBasePlacement = !variation;
              const mainAxis = getMainAxisFromPlacement(basePlacement);
              const altAxis = (function getAltAxis(axis) {
                return axis === 'x' ? 'y' : 'x';
              })(mainAxis);
              const { popperOffsets } = state.modifiersData;
              const referenceRect = state.rects.reference;
              const popperRect = state.rects.popper;
              const tetherOffsetValue =
                typeof tetherOffset === 'function'
                  ? tetherOffset({ ...state.rects, placement: state.placement })
                  : tetherOffset;
              const normalizedTetherOffsetValue =
                typeof tetherOffsetValue === 'number'
                  ? {
                      mainAxis: tetherOffsetValue,
                      altAxis: tetherOffsetValue,
                    }
                  : {
                      mainAxis: 0,
                      altAxis: 0,
                      ...tetherOffsetValue,
                    };
              const offsetModifierState = state.modifiersData.offset
                ? state.modifiersData.offset[state.placement]
                : null;
              const data = { x: 0, y: 0 };
              if (popperOffsets) {
                if (checkMainAxis) {
                  let _offsetModifierState$;
                  const mainSide = mainAxis === 'y' ? enums.m : enums.f;
                  const altSide = mainAxis === 'y' ? enums.c : enums.k;
                  const len = mainAxis === 'y' ? 'height' : 'width';
                  const offset = popperOffsets[mainAxis];
                  const min = offset + overflow[mainSide];
                  const max = offset - overflow[altSide];
                  const additive = tether ? -popperRect[len] / 2 : 0;
                  const minLen = variation === enums.l ? referenceRect[len] : popperRect[len];
                  const maxLen = variation === enums.l ? -popperRect[len] : -referenceRect[len];
                  const arrowElement = state.elements.arrow;
                  const arrowRect =
                    tether && arrowElement ? getLayoutRect(arrowElement) : { width: 0, height: 0 };
                  const arrowPaddingObject = state.modifiersData['arrow#persistent']
                    ? state.modifiersData['arrow#persistent'].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 };
                  const arrowPaddingMin = arrowPaddingObject[mainSide];
                  const arrowPaddingMax = arrowPaddingObject[altSide];
                  const arrowLen = within(0, referenceRect[len], arrowRect[len]);
                  const minOffset = isBasePlacement
                    ? referenceRect[len] / 2 -
                      additive -
                      arrowLen -
                      arrowPaddingMin -
                      normalizedTetherOffsetValue.mainAxis
                    : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
                  const maxOffset = isBasePlacement
                    ? -referenceRect[len] / 2 +
                      additive +
                      arrowLen +
                      arrowPaddingMax +
                      normalizedTetherOffsetValue.mainAxis
                    : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
                  const arrowOffsetParent =
                    state.elements.arrow && getOffsetParent(state.elements.arrow);
                  const clientOffset = arrowOffsetParent
                    ? mainAxis === 'y'
                      ? arrowOffsetParent.clientTop || 0
                      : arrowOffsetParent.clientLeft || 0
                    : 0;
                  const offsetModifierValue =
                    (_offsetModifierState$ =
                      offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null
                      ? _offsetModifierState$
                      : 0;
                  const tetherMax = offset + maxOffset - offsetModifierValue;
                  const preventedOffset = within(
                    tether
                      ? math_min(min, offset + minOffset - offsetModifierValue - clientOffset)
                      : min,
                    offset,
                    tether ? math_max(max, tetherMax) : max
                  );
                  (popperOffsets[mainAxis] = preventedOffset),
                    (data[mainAxis] = preventedOffset - offset);
                }
                if (checkAltAxis) {
                  let _offsetModifierState$2;
                  const _mainSide = mainAxis === 'x' ? enums.m : enums.f;
                  const _altSide = mainAxis === 'x' ? enums.c : enums.k;
                  const _offset = popperOffsets[altAxis];
                  const _len = altAxis === 'y' ? 'height' : 'width';
                  const _min = _offset + overflow[_mainSide];
                  const _max = _offset - overflow[_altSide];
                  const isOriginSide = [enums.m, enums.f].indexOf(basePlacement) !== -1;
                  const _offsetModifierValue =
                    (_offsetModifierState$2 =
                      offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null
                      ? _offsetModifierState$2
                      : 0;
                  const _tetherMin = isOriginSide
                    ? _min
                    : _offset -
                      referenceRect[_len] -
                      popperRect[_len] -
                      _offsetModifierValue +
                      normalizedTetherOffsetValue.altAxis;
                  const _tetherMax = isOriginSide
                    ? _offset +
                      referenceRect[_len] +
                      popperRect[_len] -
                      _offsetModifierValue -
                      normalizedTetherOffsetValue.altAxis
                    : _max;
                  const _preventedOffset =
                    tether && isOriginSide
                      ? (function withinMaxClamp(min, value, max) {
                          const v = within(min, value, max);
                          return v > max ? max : v;
                        })(_tetherMin, _offset, _tetherMax)
                      : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
                  (popperOffsets[altAxis] = _preventedOffset),
                    (data[altAxis] = _preventedOffset - _offset);
                }
                state.modifiersData[name] = data;
              }
            },
            requiresIfExists: ['offset'],
          },
          {
            name: 'arrow',
            enabled: !0,
            phase: 'main',
            fn: function arrow(_ref) {
              let _state$modifiersData$;
              const { state } = _ref;
              const { name } = _ref;
              const { options } = _ref;
              const arrowElement = state.elements.arrow;
              const { popperOffsets } = state.modifiersData;
              const basePlacement = getBasePlacement(state.placement);
              const axis = getMainAxisFromPlacement(basePlacement);
              const len = [enums.f, enums.k].indexOf(basePlacement) >= 0 ? 'height' : 'width';
              if (arrowElement && popperOffsets) {
                const paddingObject = (function toPaddingObject(padding, state) {
                  return mergePaddingObject(
                    typeof (padding =
                      typeof padding === 'function'
                        ? padding({
                            ...state.rects,
                            placement: state.placement,
                          })
                        : padding) !== 'number'
                      ? padding
                      : expandToHashMap(padding, enums.b)
                  );
                })(options.padding, state);
                const arrowRect = getLayoutRect(arrowElement);
                const minProp = axis === 'y' ? enums.m : enums.f;
                const maxProp = axis === 'y' ? enums.c : enums.k;
                const endDiff =
                  state.rects.reference[len] +
                  state.rects.reference[axis] -
                  popperOffsets[axis] -
                  state.rects.popper[len];
                const startDiff = popperOffsets[axis] - state.rects.reference[axis];
                const arrowOffsetParent = getOffsetParent(arrowElement);
                const clientSize = arrowOffsetParent
                  ? axis === 'y'
                    ? arrowOffsetParent.clientHeight || 0
                    : arrowOffsetParent.clientWidth || 0
                  : 0;
                const centerToReference = endDiff / 2 - startDiff / 2;
                const min = paddingObject[minProp];
                const max = clientSize - arrowRect[len] - paddingObject[maxProp];
                const center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
                const offset = within(min, center, max);
                const axisProp = axis;
                state.modifiersData[name] =
                  (((_state$modifiersData$ = {})[axisProp] = offset),
                  (_state$modifiersData$.centerOffset = offset - center),
                  _state$modifiersData$);
              }
            },
            effect: function arrow_effect(_ref2) {
              const { state } = _ref2;
              const _options$element = _ref2.options.element;
              let arrowElement =
                void 0 === _options$element ? '[data-popper-arrow]' : _options$element;
              arrowElement != null &&
                (typeof arrowElement !== 'string' ||
                  (arrowElement = state.elements.popper.querySelector(arrowElement))) &&
                contains(state.elements.popper, arrowElement) &&
                (state.elements.arrow = arrowElement);
            },
            requires: ['popperOffsets'],
            requiresIfExists: ['preventOverflow'],
          },
          {
            name: 'hide',
            enabled: !0,
            phase: 'main',
            requiresIfExists: ['preventOverflow'],
            fn: function hide(_ref) {
              const { state } = _ref;
              const { name } = _ref;
              const referenceRect = state.rects.reference;
              const popperRect = state.rects.popper;
              const preventedOffsets = state.modifiersData.preventOverflow;
              const referenceOverflow = detectOverflow(state, {
                elementContext: 'reference',
              });
              const popperAltOverflow = detectOverflow(state, {
                altBoundary: !0,
              });
              const referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
              const popperEscapeOffsets = getSideOffsets(
                popperAltOverflow,
                popperRect,
                preventedOffsets
              );
              const isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
              const hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
              (state.modifiersData[name] = {
                referenceClippingOffsets,
                popperEscapeOffsets,
                isReferenceHidden,
                hasPopperEscaped,
              }),
                (state.attributes.popper = {
                  ...state.attributes.popper,
                  'data-popper-reference-hidden': isReferenceHidden,
                  'data-popper-escaped': hasPopperEscaped,
                });
            },
          },
        ],
      });
      const react_fast_compare = __webpack_require__(3800);
      const react_fast_compare_default = __webpack_require__.n(react_fast_compare);
      const EMPTY_MODIFIERS = [];
      const NOOP = function NOOP() {};
      const NOOP_PROMISE = function NOOP_PROMISE() {
        return Promise.resolve(null);
      };
      const Popper_EMPTY_MODIFIERS = [];
      function Popper(_ref) {
        const _ref$placement = _ref.placement;
        const placement = void 0 === _ref$placement ? 'bottom' : _ref$placement;
        const _ref$strategy = _ref.strategy;
        const strategy = void 0 === _ref$strategy ? 'absolute' : _ref$strategy;
        const _ref$modifiers = _ref.modifiers;
        const modifiers = void 0 === _ref$modifiers ? Popper_EMPTY_MODIFIERS : _ref$modifiers;
        const { referenceElement } = _ref;
        const { onFirstUpdate } = _ref;
        const { innerRef } = _ref;
        const { children } = _ref;
        const referenceNode = react.useContext(ManagerReferenceNodeContext);
        const _React$useState = react.useState(null);
        const popperElement = _React$useState[0];
        const setPopperElement = _React$useState[1];
        const _React$useState2 = react.useState(null);
        const arrowElement = _React$useState2[0];
        const setArrowElement = _React$useState2[1];
        react.useEffect(() => {
          setRef(innerRef, popperElement);
        }, [innerRef, popperElement]);
        const options = react.useMemo(
          () => ({
            placement,
            strategy,
            onFirstUpdate,
            modifiers: [].concat(modifiers, [
              {
                name: 'arrow',
                enabled: arrowElement != null,
                options: { element: arrowElement },
              },
            ]),
          }),
          [placement, strategy, onFirstUpdate, modifiers, arrowElement]
        );
        const _usePopper = (function usePopper(referenceElement, popperElement, options) {
          void 0 === options && (options = {});
          const prevOptions = react.useRef(null);
          const optionsWithDefaults = {
            onFirstUpdate: options.onFirstUpdate,
            placement: options.placement || 'bottom',
            strategy: options.strategy || 'absolute',
            modifiers: options.modifiers || EMPTY_MODIFIERS,
          };
          const _React$useState = react.useState({
            styles: {
              popper: {
                position: optionsWithDefaults.strategy,
                left: '0',
                top: '0',
              },
              arrow: { position: 'absolute' },
            },
            attributes: {},
          });
          const state = _React$useState[0];
          const setState = _React$useState[1];
          const updateStateModifier = react.useMemo(
            () => ({
              name: 'updateState',
              enabled: !0,
              phase: 'write',
              fn: function fn(_ref) {
                const { state } = _ref;
                const elements = Object.keys(state.elements);
                setState({
                  styles: fromEntries(
                    elements.map((element) => [element, state.styles[element] || {}])
                  ),
                  attributes: fromEntries(
                    elements.map((element) => [element, state.attributes[element]])
                  ),
                });
              },
              requires: ['computeStyles'],
            }),
            []
          );
          const popperOptions = react.useMemo(() => {
            const newOptions = {
              onFirstUpdate: optionsWithDefaults.onFirstUpdate,
              placement: optionsWithDefaults.placement,
              strategy: optionsWithDefaults.strategy,
              modifiers: [].concat(optionsWithDefaults.modifiers, [
                updateStateModifier,
                { name: 'applyStyles', enabled: !1 },
              ]),
            };
            return react_fast_compare_default()(prevOptions.current, newOptions)
              ? prevOptions.current || newOptions
              : ((prevOptions.current = newOptions), newOptions);
          }, [
            optionsWithDefaults.onFirstUpdate,
            optionsWithDefaults.placement,
            optionsWithDefaults.strategy,
            optionsWithDefaults.modifiers,
            updateStateModifier,
          ]);
          const popperInstanceRef = react.useRef();
          return (
            useIsomorphicLayoutEffect(() => {
              popperInstanceRef.current && popperInstanceRef.current.setOptions(popperOptions);
            }, [popperOptions]),
            useIsomorphicLayoutEffect(() => {
              if (referenceElement != null && popperElement != null) {
                const popperInstance = (options.createPopper || popper_createPopper)(
                  referenceElement,
                  popperElement,
                  popperOptions
                );
                return (
                  (popperInstanceRef.current = popperInstance),
                  function () {
                    popperInstance.destroy(), (popperInstanceRef.current = null);
                  }
                );
              }
            }, [referenceElement, popperElement, options.createPopper]),
            {
              state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
              styles: state.styles,
              attributes: state.attributes,
              update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
              forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null,
            }
          );
        })(referenceElement || referenceNode, popperElement, options);
        const { state } = _usePopper;
        const { styles } = _usePopper;
        const { forceUpdate } = _usePopper;
        const { update } = _usePopper;
        const childrenProps = react.useMemo(
          () => ({
            ref: setPopperElement,
            style: styles.popper,
            placement: state ? state.placement : placement,
            hasPopperEscaped:
              state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
            isReferenceHidden:
              state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
            arrowProps: { style: styles.arrow, ref: setArrowElement },
            forceUpdate: forceUpdate || NOOP,
            update: update || NOOP_PROMISE,
          }),
          [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]
        );
        return unwrapArray(children)(childrenProps);
      }
      const warning = __webpack_require__(3801);
      const warning_default = __webpack_require__.n(warning);
      function Reference(_ref) {
        const { children } = _ref;
        const { innerRef } = _ref;
        const setReferenceNode = react.useContext(ManagerReferenceNodeSetterContext);
        const refHandler = react.useCallback(
          (node) => {
            setRef(innerRef, node), safeInvoke(setReferenceNode, node);
          },
          [innerRef, setReferenceNode]
        );
        return (
          react.useEffect(
            () =>
              function () {
                return setRef(innerRef, null);
              }
          ),
          react.useEffect(() => {
            warning_default()(
              Boolean(setReferenceNode),
              '`Reference` should not be used outside of a `Manager` component.'
            );
          }, [setReferenceNode]),
          unwrapArray(children)({ ref: refHandler })
        );
      }
      const TooltipContext = react_default.a.createContext({});
      const callAll = function callAll() {
        for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++)
          fns[_key] = arguments[_key];
        return function () {
          for (
            var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          )
            args[_key2] = arguments[_key2];
          return fns.forEach((fn) => fn && fn.apply(void 0, args));
        };
      };
      const canUseDOM = function canUseDOM() {
        return !(
          typeof window === 'undefined' ||
          !window.document ||
          !window.document.createElement
        );
      };
      const react_popper_tooltip_setRef = function setRef(ref, node) {
        if (typeof ref === 'function') return ref(node);
        ref != null && (ref.current = node);
      };
      const react_popper_tooltip_Tooltip = (function (_Component) {
        function Tooltip() {
          for (
            var _this, _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this = _Component.call.apply(_Component, [this].concat(args)) || this).observer =
              void 0),
            (_this.tooltipRef = void 0),
            (_this.handleOutsideClick = function (event) {
              if (_this.tooltipRef && !_this.tooltipRef.contains(event.target)) {
                const { parentOutsideClickHandler } = _this.context;
                const _this$props = _this.props;
                const { hideTooltip } = _this$props;
                (0, _this$props.clearScheduled)(),
                  hideTooltip(),
                  parentOutsideClickHandler && parentOutsideClickHandler(event);
              }
            }),
            (_this.handleOutsideRightClick = function (event) {
              if (_this.tooltipRef && !_this.tooltipRef.contains(event.target)) {
                const { parentOutsideRightClickHandler } = _this.context;
                const _this$props2 = _this.props;
                const { hideTooltip } = _this$props2;
                (0, _this$props2.clearScheduled)(),
                  hideTooltip(),
                  parentOutsideRightClickHandler && parentOutsideRightClickHandler(event);
              }
            }),
            (_this.addOutsideClickHandler = function () {
              document.body.addEventListener('touchend', _this.handleOutsideClick),
                document.body.addEventListener('click', _this.handleOutsideClick);
            }),
            (_this.removeOutsideClickHandler = function () {
              document.body.removeEventListener('touchend', _this.handleOutsideClick),
                document.body.removeEventListener('click', _this.handleOutsideClick);
            }),
            (_this.addOutsideRightClickHandler = function () {
              return document.body.addEventListener('contextmenu', _this.handleOutsideRightClick);
            }),
            (_this.removeOutsideRightClickHandler = function () {
              return document.body.removeEventListener(
                'contextmenu',
                _this.handleOutsideRightClick
              );
            }),
            (_this.getTooltipRef = function (node) {
              (_this.tooltipRef = node), react_popper_tooltip_setRef(_this.props.innerRef, node);
            }),
            (_this.getArrowProps = function (props) {
              return (
                void 0 === props && (props = {}),
                Object(esm_extends.a)({}, props, {
                  style: Object(esm_extends.a)({}, props.style, _this.props.arrowProps.style),
                })
              );
            }),
            (_this.getTooltipProps = function (props) {
              return (
                void 0 === props && (props = {}),
                Object(esm_extends.a)(
                  {},
                  props,
                  _this.isTriggeredBy('hover') && {
                    onMouseEnter: callAll(_this.props.clearScheduled, props.onMouseEnter),
                    onMouseLeave: callAll(_this.props.hideTooltip, props.onMouseLeave),
                  },
                  {
                    style: Object(esm_extends.a)({}, props.style, _this.props.style),
                  }
                )
              );
            }),
            (_this.contextValue = {
              isParentNoneTriggered: _this.props.trigger === 'none',
              addParentOutsideClickHandler: _this.addOutsideClickHandler,
              addParentOutsideRightClickHandler: _this.addOutsideRightClickHandler,
              parentOutsideClickHandler: _this.handleOutsideClick,
              parentOutsideRightClickHandler: _this.handleOutsideRightClick,
              removeParentOutsideClickHandler: _this.removeOutsideClickHandler,
              removeParentOutsideRightClickHandler: _this.removeOutsideRightClickHandler,
            }),
            _this
          );
        }
        Object(inheritsLoose.a)(Tooltip, _Component);
        const _proto = Tooltip.prototype;
        return (
          (_proto.componentDidMount = function componentDidMount() {
            const _this2 = this;
            if (
              ((this.observer = new MutationObserver(() => {
                _this2.props.update();
              })).observe(this.tooltipRef, this.props.mutationObserverOptions),
              this.isTriggeredBy('hover') ||
                this.isTriggeredBy('click') ||
                this.isTriggeredBy('right-click'))
            ) {
              const _this$context = this.context;
              const { removeParentOutsideClickHandler } = _this$context;
              const { removeParentOutsideRightClickHandler } = _this$context;
              this.addOutsideClickHandler(),
                this.addOutsideRightClickHandler(),
                removeParentOutsideClickHandler && removeParentOutsideClickHandler(),
                removeParentOutsideRightClickHandler && removeParentOutsideRightClickHandler();
            }
          }),
          (_proto.componentDidUpdate = function componentDidUpdate() {
            this.props.closeOnReferenceHidden &&
              this.props.isReferenceHidden &&
              this.props.hideTooltip();
          }),
          (_proto.componentWillUnmount = function componentWillUnmount() {
            if (
              (this.observer && this.observer.disconnect(),
              this.isTriggeredBy('hover') ||
                this.isTriggeredBy('click') ||
                this.isTriggeredBy('right-click'))
            ) {
              const _this$context2 = this.context;
              const { isParentNoneTriggered } = _this$context2;
              const { addParentOutsideClickHandler } = _this$context2;
              const { addParentOutsideRightClickHandler } = _this$context2;
              this.removeOutsideClickHandler(),
                this.removeOutsideRightClickHandler(),
                (this.handleOutsideClick = void 0),
                (this.handleOutsideRightClick = void 0),
                !isParentNoneTriggered &&
                  addParentOutsideClickHandler &&
                  addParentOutsideClickHandler(),
                !isParentNoneTriggered &&
                  addParentOutsideRightClickHandler &&
                  addParentOutsideRightClickHandler();
            }
          }),
          (_proto.render = function render() {
            const _this$props3 = this.props;
            const { arrowProps } = _this$props3;
            const { placement } = _this$props3;
            const { tooltip } = _this$props3;
            return react_default.a.createElement(
              TooltipContext.Provider,
              { value: this.contextValue },
              tooltip({
                arrowRef: arrowProps.ref,
                getArrowProps: this.getArrowProps,
                getTooltipProps: this.getTooltipProps,
                placement,
                tooltipRef: this.getTooltipRef,
              })
            );
          }),
          (_proto.isTriggeredBy = function isTriggeredBy(event) {
            const { trigger } = this.props;
            return trigger === event || (Array.isArray(trigger) && trigger.includes(event));
          }),
          Tooltip
        );
      })(react.Component);
      react_popper_tooltip_Tooltip.contextType = TooltipContext;
      const react_popper_tooltip_TooltipTrigger = (function (_Component) {
        function TooltipTrigger() {
          for (
            var _this, _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this = _Component.call.apply(_Component, [this].concat(args)) || this).state = {
              tooltipShown: _this.props.defaultTooltipShown,
            }),
            (_this.hideTimeout = void 0),
            (_this.showTimeout = void 0),
            (_this.popperOffset = void 0),
            (_this.setTooltipState = function (state) {
              const cb = function cb() {
                return _this.props.onVisibilityChange(state.tooltipShown);
              };
              _this.isControlled() ? cb() : _this.setState(state, cb);
            }),
            (_this.clearScheduled = function () {
              clearTimeout(_this.hideTimeout), clearTimeout(_this.showTimeout);
            }),
            (_this.showTooltip = function (_ref) {
              const { pageX } = _ref;
              const { pageY } = _ref;
              _this.clearScheduled();
              let state = { tooltipShown: !0 };
              _this.props.followCursor &&
                (state = Object(esm_extends.a)({}, state, {
                  pageX,
                  pageY,
                })),
                (_this.showTimeout = window.setTimeout(
                  () => _this.setTooltipState(state),
                  _this.props.delayShow
                ));
            }),
            (_this.hideTooltip = function () {
              _this.clearScheduled(),
                (_this.hideTimeout = window.setTimeout(
                  () => _this.setTooltipState({ tooltipShown: !1 }),
                  _this.props.delayHide
                ));
            }),
            (_this.toggleTooltip = function (_ref2) {
              const { pageX } = _ref2;
              const { pageY } = _ref2;
              const action = _this.getState() ? 'hideTooltip' : 'showTooltip';
              _this[action]({ pageX, pageY });
            }),
            (_this.clickToggle = function (event) {
              event.preventDefault();
              const { pageX } = event;
              const { pageY } = event;
              const action = _this.props.followCursor ? 'showTooltip' : 'toggleTooltip';
              _this[action]({ pageX, pageY });
            }),
            (_this.contextMenuToggle = function (event) {
              event.preventDefault();
              const { pageX } = event;
              const { pageY } = event;
              const action = _this.props.followCursor ? 'showTooltip' : 'toggleTooltip';
              _this[action]({ pageX, pageY });
            }),
            (_this.getTriggerProps = function (props) {
              return (
                void 0 === props && (props = {}),
                Object(esm_extends.a)(
                  {},
                  props,
                  _this.isTriggeredBy('click') && {
                    onClick: callAll(_this.clickToggle, props.onClick),
                    onTouchEnd: callAll(_this.clickToggle, props.onTouchEnd),
                  },
                  _this.isTriggeredBy('right-click') && {
                    onContextMenu: callAll(_this.contextMenuToggle, props.onContextMenu),
                  },
                  _this.isTriggeredBy('hover') &&
                    Object(esm_extends.a)(
                      {
                        onMouseEnter: callAll(_this.showTooltip, props.onMouseEnter),
                        onMouseLeave: callAll(_this.hideTooltip, props.onMouseLeave),
                      },
                      _this.props.followCursor && {
                        onMouseMove: callAll(_this.showTooltip, props.onMouseMove),
                      }
                    ),
                  _this.isTriggeredBy('focus') && {
                    onFocus: callAll(_this.showTooltip, props.onFocus),
                    onBlur: callAll(_this.hideTooltip, props.onBlur),
                  }
                )
              );
            }),
            _this
          );
        }
        Object(inheritsLoose.a)(TooltipTrigger, _Component);
        const _proto = TooltipTrigger.prototype;
        return (
          (_proto.componentWillUnmount = function componentWillUnmount() {
            this.clearScheduled();
          }),
          (_proto.render = function render() {
            const _this2 = this;
            const _this$props = this.props;
            const { children } = _this$props;
            const { tooltip } = _this$props;
            const { placement } = _this$props;
            const { trigger } = _this$props;
            const { getTriggerRef } = _this$props;
            const { modifiers } = _this$props;
            const { closeOnReferenceHidden } = _this$props;
            const { usePortal } = _this$props;
            const { portalContainer } = _this$props;
            const { followCursor } = _this$props;
            const { getTooltipRef } = _this$props;
            const { mutationObserverOptions } = _this$props;
            const restProps = Object(objectWithoutPropertiesLoose.a)(_this$props, [
              'children',
              'tooltip',
              'placement',
              'trigger',
              'getTriggerRef',
              'modifiers',
              'closeOnReferenceHidden',
              'usePortal',
              'portalContainer',
              'followCursor',
              'getTooltipRef',
              'mutationObserverOptions',
            ]);
            const popper = react_default.a.createElement(
              Popper,
              Object(esm_extends.a)(
                {
                  innerRef: getTooltipRef,
                  placement,
                  modifiers: [
                    {
                      name: 'followCursor',
                      enabled: followCursor,
                      phase: 'main',
                      fn: function fn(data) {
                        _this2.popperOffset = data.state.rects.popper;
                      },
                    },
                  ].concat(modifiers),
                },
                restProps
              ),
              (_ref3) => {
                const { ref } = _ref3;
                const { style } = _ref3;
                const { placement } = _ref3;
                const { arrowProps } = _ref3;
                const { isReferenceHidden } = _ref3;
                const { update } = _ref3;
                if (followCursor && _this2.popperOffset) {
                  const _this2$state = _this2.state;
                  const { pageX } = _this2$state;
                  const { pageY } = _this2$state;
                  const _this2$popperOffset = _this2.popperOffset;
                  const { width } = _this2$popperOffset;
                  const { height } = _this2$popperOffset;
                  const x =
                    pageX + width > window.pageXOffset + document.body.offsetWidth
                      ? pageX - width
                      : pageX;
                  const y =
                    pageY + height > window.pageYOffset + document.body.offsetHeight
                      ? pageY - height
                      : pageY;
                  style.transform = `translate3d(${x}px, ${y}px, 0`;
                }
                return react_default.a.createElement(
                  react_popper_tooltip_Tooltip,
                  Object(esm_extends.a)(
                    {
                      arrowProps,
                      closeOnReferenceHidden,
                      isReferenceHidden,
                      placement,
                      update,
                      style,
                      tooltip,
                      trigger,
                      mutationObserverOptions,
                    },
                    {
                      clearScheduled: _this2.clearScheduled,
                      hideTooltip: _this2.hideTooltip,
                      innerRef: ref,
                    }
                  )
                );
              }
            );
            return react_default.a.createElement(
              Manager,
              null,
              react_default.a.createElement(Reference, { innerRef: getTriggerRef }, (_ref4) => {
                const { ref } = _ref4;
                return children({
                  getTriggerProps: _this2.getTriggerProps,
                  triggerRef: ref,
                });
              }),
              this.getState() &&
                (usePortal ? Object(react_dom.createPortal)(popper, portalContainer) : popper)
            );
          }),
          (_proto.isControlled = function isControlled() {
            return void 0 !== this.props.tooltipShown;
          }),
          (_proto.getState = function getState() {
            return this.isControlled() ? this.props.tooltipShown : this.state.tooltipShown;
          }),
          (_proto.isTriggeredBy = function isTriggeredBy(event) {
            const { trigger } = this.props;
            return trigger === event || (Array.isArray(trigger) && trigger.includes(event));
          }),
          TooltipTrigger
        );
      })(react.Component);
      react_popper_tooltip_TooltipTrigger.defaultProps = {
        closeOnReferenceHidden: !0,
        defaultTooltipShown: !1,
        delayHide: 0,
        delayShow: 0,
        followCursor: !1,
        onVisibilityChange: function noop() {},
        placement: 'right',
        portalContainer: canUseDOM() ? document.body : null,
        trigger: 'hover',
        usePortal: canUseDOM(),
        mutationObserverOptions: { childList: !0, subtree: !0 },
        modifiers: [],
      };
      const react_popper_tooltip = react_popper_tooltip_TooltipTrigger;
      const memoizerific =
        (__webpack_require__(1542),
        __webpack_require__(468),
        __webpack_require__(2257),
        __webpack_require__(180),
        __webpack_require__(39));
      const memoizerific_default = __webpack_require__.n(memoizerific);
      const utils = __webpack_require__(372);
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (let i = 1; i < arguments.length; i++) {
                const source = arguments[i];
                for (const key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        let key;
        let i;
        const target = (function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          let key;
          let i;
          const target = {};
          const sourceKeys = Object.keys(source);
          for (i = 0; i < sourceKeys.length; i++)
            (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
          return target;
        })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          const sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      let _templateObject;
      let _templateObject2;
      const match = memoizerific_default()(1e3)(function (requests, actual, value) {
        const fallback = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        return actual.split('-')[0] === requests ? value : fallback;
      });
      const Arrow = esm.styled.div(
        { position: 'absolute', borderStyle: 'solid' },
        (_ref) => {
          const { placement } = _ref;
          let x = 0;
          let y = 0;
          switch (!0) {
            case placement.startsWith('left') || placement.startsWith('right'):
              y = 8;
              break;
            case placement.startsWith('top') || placement.startsWith('bottom'):
              x = 8;
          }
          return {
            transform: 'translate3d('.concat(x, 'px, ').concat(y, 'px, 0px)'),
          };
        },
        (_ref2) => {
          const { theme } = _ref2;
          const { color } = _ref2;
          const { placement } = _ref2;
          return {
            bottom: ''.concat(match('top', placement, -8, 'auto'), 'px'),
            top: ''.concat(match('bottom', placement, -8, 'auto'), 'px'),
            right: ''.concat(match('left', placement, -8, 'auto'), 'px'),
            left: ''.concat(match('right', placement, -8, 'auto'), 'px'),
            borderBottomWidth: ''.concat(match('top', placement, '0', 8), 'px'),
            borderTopWidth: ''.concat(match('bottom', placement, '0', 8), 'px'),
            borderRightWidth: ''.concat(match('left', placement, '0', 8), 'px'),
            borderLeftWidth: ''.concat(match('right', placement, '0', 8), 'px'),
            borderTopColor: match(
              'top',
              placement,
              theme.color[color] || color || theme.base === 'light'
                ? Object(utils.c)(theme.background.app)
                : Object(utils.a)(theme.background.app),
              'transparent'
            ),
            borderBottomColor: match(
              'bottom',
              placement,
              theme.color[color] || color || theme.base === 'light'
                ? Object(utils.c)(theme.background.app)
                : Object(utils.a)(theme.background.app),
              'transparent'
            ),
            borderLeftColor: match(
              'left',
              placement,
              theme.color[color] || color || theme.base === 'light'
                ? Object(utils.c)(theme.background.app)
                : Object(utils.a)(theme.background.app),
              'transparent'
            ),
            borderRightColor: match(
              'right',
              placement,
              theme.color[color] || color || theme.base === 'light'
                ? Object(utils.c)(theme.background.app)
                : Object(utils.a)(theme.background.app),
              'transparent'
            ),
          };
        }
      );
      const Wrapper = esm.styled.div(
        (_ref3) => ({
          display: _ref3.hidden ? 'none' : 'inline-block',
          zIndex: 2147483647,
        }),
        (_ref4) => {
          const { theme } = _ref4;
          const { color } = _ref4;
          return _ref4.hasChrome
            ? {
                background:
                  theme.color[color] || color || theme.base === 'light'
                    ? Object(utils.c)(theme.background.app)
                    : Object(utils.a)(theme.background.app),
                filter:
                  '\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ',
                borderRadius: 2 * theme.appBorderRadius,
                fontSize: theme.typography.size.s1,
              }
            : {};
        }
      );
      const Tooltip_Tooltip = function Tooltip(_ref5) {
        const { placement } = _ref5;
        const { hasChrome } = _ref5;
        const { children } = _ref5;
        const { arrowProps } = _ref5;
        const { tooltipRef } = _ref5;
        const { arrowRef } = _ref5;
        const { color } = _ref5;
        const props = _objectWithoutProperties(_ref5, [
          'placement',
          'hasChrome',
          'children',
          'arrowProps',
          'tooltipRef',
          'arrowRef',
          'color',
        ]);
        return react_default.a.createElement(
          Wrapper,
          {
            hasChrome,
            placement,
            ref: tooltipRef,
            ...props,
            color,
          },
          hasChrome &&
            react_default.a.createElement(Arrow, {
              placement,
              ref: arrowRef,
              ...arrowProps,
              color,
            }),
          children
        );
      };
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return;
            const _arr = [];
            let _n = !0;
            let _d = !1;
            let _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || _i.return == null || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
            let n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') return Array.from(o);
            if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function WithTooltip_extends() {
        return (
          (WithTooltip_extends =
            Object.assign ||
            function (target) {
              for (let i = 1; i < arguments.length; i++) {
                const source = arguments[i];
                for (const key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          WithTooltip_extends.apply(this, arguments)
        );
      }
      function WithTooltip_objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        let key;
        let i;
        const target = (function WithTooltip_objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          let key;
          let i;
          const target = {};
          const sourceKeys = Object.keys(source);
          for (i = 0; i < sourceKeys.length; i++)
            (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
          return target;
        })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          const sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function _taggedTemplateLiteral(strings, raw) {
        return (
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          )
        );
      }
      (Tooltip_Tooltip.displayName = 'Tooltip'),
        (Tooltip_Tooltip.defaultProps = {
          color: void 0,
          arrowRef: void 0,
          tooltipRef: void 0,
          hasChrome: !0,
          placement: 'top',
          arrowProps: {},
        });
      const WithTooltip_document = window_default.a.document;
      const TargetContainer = esm.styled.div(
        _templateObject ||
          (_templateObject = _taggedTemplateLiteral([
            '\n  display: inline-block;\n  cursor: ',
            ';\n',
          ])),
        (props) => (props.mode === 'hover' ? 'default' : 'pointer')
      );
      const TargetSvgContainer = esm.styled.g(
        _templateObject2 || (_templateObject2 = _taggedTemplateLiteral(['\n  cursor: ', ';\n'])),
        (props) => (props.mode === 'hover' ? 'default' : 'pointer')
      );
      var WithTooltip_WithTooltipPure = function WithTooltipPure(_ref) {
        const { svg } = _ref;
        const { trigger } = _ref;
        const placement = (_ref.closeOnClick, _ref.placement);
        const { modifiers } = _ref;
        const { hasChrome } = _ref;
        const _tooltip = _ref.tooltip;
        const { children } = _ref;
        const { tooltipShown } = _ref;
        const { onVisibilityChange } = _ref;
        const props = WithTooltip_objectWithoutProperties(_ref, [
          'svg',
          'trigger',
          'closeOnClick',
          'placement',
          'modifiers',
          'hasChrome',
          'tooltip',
          'children',
          'tooltipShown',
          'onVisibilityChange',
        ]);
        const Container = svg ? TargetSvgContainer : TargetContainer;
        return react_default.a.createElement(
          react_popper_tooltip,
          {
            placement,
            trigger,
            modifiers,
            tooltipShown,
            onVisibilityChange,
            tooltip: function tooltip(_ref2) {
              const { getTooltipProps } = _ref2;
              const { getArrowProps } = _ref2;
              const { tooltipRef } = _ref2;
              const { arrowRef } = _ref2;
              const tooltipPlacement = _ref2.placement;
              return react_default.a.createElement(
                Tooltip_Tooltip,
                {
                  hasChrome,
                  placement: tooltipPlacement,
                  tooltipRef,
                  arrowRef,
                  arrowProps: getArrowProps(),
                  ...getTooltipProps(),
                },
                typeof _tooltip === 'function'
                  ? _tooltip({
                      onHide: function onHide() {
                        return onVisibilityChange(!1);
                      },
                    })
                  : _tooltip
              );
            },
          },
          (_ref3) => {
            const { getTriggerProps } = _ref3;
            const { triggerRef } = _ref3;
            return react_default.a.createElement(
              Container,
              {
                ref: triggerRef,
                ...getTriggerProps(),
                ...props,
              },
              children
            );
          }
        );
      };
      (WithTooltip_WithTooltipPure.displayName = 'WithTooltipPure'),
        (WithTooltip_WithTooltipPure.defaultProps = {
          svg: !1,
          trigger: 'hover',
          closeOnClick: !1,
          placement: 'top',
          modifiers: [
            { name: 'preventOverflow', options: { padding: 8 } },
            { name: 'offset', options: { offset: [8, 8] } },
            { name: 'arrow', options: { padding: 8 } },
          ],
          hasChrome: !0,
          tooltipShown: !1,
        });
      var WithTooltip_WithToolTipState = function WithToolTipState(_ref4) {
        const { startOpen } = _ref4;
        const onChange = _ref4.onVisibilityChange;
        const rest = WithTooltip_objectWithoutProperties(_ref4, [
          'startOpen',
          'onVisibilityChange',
        ]);
        const _useState2 = _slicedToArray(Object(react.useState)(startOpen || !1), 2);
        const tooltipShown = _useState2[0];
        const setTooltipShown = _useState2[1];
        const onVisibilityChange = Object(react.useCallback)(
          (visibility) => {
            (onChange && !1 === onChange(visibility)) || setTooltipShown(visibility);
          },
          [onChange]
        );
        return (
          Object(react.useEffect)(() => {
            const hide = function hide() {
              return onVisibilityChange(!1);
            };
            WithTooltip_document.addEventListener('keydown', hide, !1);
            const iframes = Array.from(WithTooltip_document.getElementsByTagName('iframe'));
            const unbinders = [];
            return (
              iframes.forEach((iframe) => {
                const bind = function bind() {
                  try {
                    iframe.contentWindow.document &&
                      (iframe.contentWindow.document.addEventListener('click', hide),
                      unbinders.push(() => {
                        try {
                          iframe.contentWindow.document.removeEventListener('click', hide);
                        } catch (e) {}
                      }));
                  } catch (e) {}
                };
                bind(),
                  iframe.addEventListener('load', bind),
                  unbinders.push(() => {
                    iframe.removeEventListener('load', bind);
                  });
              }),
              function () {
                WithTooltip_document.removeEventListener('keydown', hide),
                  unbinders.forEach((unbind) => {
                    unbind();
                  });
              }
            );
          }),
          react_default.a.createElement(WithTooltip_WithTooltipPure, {
            ...rest,
            tooltipShown,
            onVisibilityChange,
          })
        );
      };
      WithTooltip_WithToolTipState.displayName = 'WithToolTipState';
    },
    3800(module, exports) {
      const hasElementType = typeof Element !== 'undefined';
      const hasMap = typeof Map === 'function';
      const hasSet = typeof Set === 'function';
      const hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;
      function equal(a, b) {
        if (a === b) return !0;
        if (a && b && typeof a === 'object' && typeof b === 'object') {
          if (a.constructor !== b.constructor) return !1;
          let length;
          let i;
          let keys;
          let it;
          if (Array.isArray(a)) {
            if ((length = a.length) != b.length) return !1;
            for (i = length; i-- != 0; ) if (!equal(a[i], b[i])) return !1;
            return !0;
          }
          if (hasMap && a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) return !1;
            for (it = a.entries(); !(i = it.next()).done; ) if (!b.has(i.value[0])) return !1;
            for (it = a.entries(); !(i = it.next()).done; )
              if (!equal(i.value[1], b.get(i.value[0]))) return !1;
            return !0;
          }
          if (hasSet && a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) return !1;
            for (it = a.entries(); !(i = it.next()).done; ) if (!b.has(i.value[0])) return !1;
            return !0;
          }
          if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            if ((length = a.length) != b.length) return !1;
            for (i = length; i-- != 0; ) if (a[i] !== b[i]) return !1;
            return !0;
          }
          if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
          if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
          if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
          if ((length = (keys = Object.keys(a)).length) !== Object.keys(b).length) return !1;
          for (i = length; i-- != 0; )
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return !1;
          if (hasElementType && a instanceof Element) return !1;
          for (i = length; i-- != 0; )
            if (
              ((keys[i] !== '_owner' && keys[i] !== '__v' && keys[i] !== '__o') || !a.$$typeof) &&
              !equal(a[keys[i]], b[keys[i]])
            )
              return !1;
          return !0;
        }
        return a != a && b != b;
      }
      module.exports = function isEqual(a, b) {
        try {
          return equal(a, b);
        } catch (error) {
          if ((error.message || '').match(/stack|recursion/i))
            return console.warn('react-fast-compare cannot handle circular refs'), !1;
          throw error;
        }
      };
    },
    3801(module, exports, __webpack_require__) {
      const warning = function () {};
      module.exports = warning;
    },
  },
]);

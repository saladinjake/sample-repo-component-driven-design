import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import {
  useMediaQueryRequest,
  useCurrentScreenQuery,
} from '../../hooks/useMediaQueryRequest'
import Flex from '../Flex'
import { createPortal } from 'react-dom'
import {
  HorizontalScroller as HorizontalScroll,
  ScrollArrows,
  FlexAlign,
  HorizontalFilter,
  FilterMenu,
} from './HorizontalScroll.styles'
import Box from '../Box/Box'

interface IChevronProps {
  className: string
  height?: string
  onScroll?: () => void
  width?: string
  fill?: string
  ref?: any
}

interface IScrollerProps {
  children: React.ReactNode
}

const ToggleIcon = ({ onToggle }) => {
  return (
    <svg
      width="48"
      height="52"
      viewBox="0 0 51 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onToggle}
      style={{ cursor: 'pointer' }}
      className="filterToggle"
    >
      <rect x="0.5" y="7.5" width="49" height="47" rx="7.5" stroke="#DBDCE0" />
      {/*<rect x="36" width="15" height="16" rx="7.5" fill="#F7685B" />*/}
      <path
        d="M40.748 12V10.515L43.102 8.062C43.388 7.76867 43.5933 7.512 43.718 7.292C43.8427 7.072 43.905 6.84833 43.905 6.621C43.905 6.34233 43.8097 6.13333 43.619 5.994C43.4357 5.85467 43.168 5.785 42.816 5.785C42.5227 5.785 42.222 5.84 41.914 5.95C41.6133 6.05267 41.309 6.22133 41.001 6.456L40.374 4.982C40.7187 4.718 41.133 4.509 41.617 4.355C42.101 4.201 42.5997 4.124 43.113 4.124C44.015 4.124 44.7007 4.31833 45.17 4.707C45.6467 5.09567 45.885 5.65667 45.885 6.39C45.885 6.85933 45.775 7.31033 45.555 7.743C45.3423 8.16833 44.9867 8.623 44.488 9.107L42.684 10.867V10.35H46.171V12H40.748Z"
        fill="white"
      />
      <g clip-path="url(#clip0_126_105022)">
        <path
          d="M27.9976 28.0522C26.8798 28.0522 25.7684 28.0522 24.6506 28.0522C24.5369 28.0522 24.4864 28.0838 24.4485 28.1909C24.2086 28.8086 23.5455 29.2561 22.8824 29.2498C22.2004 29.2435 21.5815 28.8149 21.3479 28.1846C21.31 28.0838 21.2658 28.0522 21.1584 28.0522C20.6469 28.0585 20.1354 28.0585 19.6302 28.0522C19.226 28.0459 19.005 27.6741 19.2008 27.34C19.2955 27.1698 19.4534 27.1131 19.6428 27.1131C20.148 27.1131 20.6532 27.1131 21.1584 27.1131C21.2594 27.1131 21.3036 27.0816 21.3415 26.987C21.5689 26.4009 21.9983 26.0353 22.6298 25.9407C23.3181 25.8399 23.8612 26.1046 24.2717 26.6593C24.3222 26.7286 24.3791 26.7979 24.398 26.8736C24.4485 27.0816 24.5811 27.1131 24.7769 27.1131C26.9493 27.1068 29.1216 27.1068 31.294 27.1131C31.4266 27.1131 31.5845 27.1509 31.6918 27.2202C31.8623 27.3274 31.9002 27.5165 31.8497 27.7119C31.7929 27.9073 31.6476 28.0144 31.4519 28.0459C31.395 28.0522 31.3382 28.0522 31.2814 28.0522C30.1825 28.0522 29.0901 28.0522 27.9976 28.0522ZM22.8887 26.8547C22.4909 26.8547 22.1562 27.1887 22.1625 27.5858C22.1625 27.9766 22.4972 28.3044 22.8887 28.3044C23.2866 28.3044 23.6149 27.9829 23.6149 27.5858C23.6149 27.1824 23.2929 26.8547 22.8887 26.8547Z"
          fill="#40196D"
        />
        <path
          d="M29.1217 35.8994C28.3765 35.8994 27.625 35.8994 26.8799 35.8994C26.7851 35.8994 26.7346 35.9247 26.6967 36.0192C26.4441 36.6243 25.9958 37.0025 25.339 37.0718C24.5938 37.1474 24.0381 36.8323 23.6655 36.1894C23.6592 36.1831 23.6529 36.1705 23.6529 36.1642C23.6213 35.9121 23.4508 35.8994 23.2361 35.8994C22.0552 35.9121 20.868 35.9058 19.6871 35.9058C19.4218 35.9058 19.245 35.8049 19.1756 35.6158C19.0493 35.2755 19.264 34.9666 19.6302 34.9666C20.4007 34.9603 21.1774 34.9666 21.9478 34.9666C22.4341 34.9666 22.9267 34.9666 23.4129 34.9666C23.5076 34.9666 23.5519 34.9414 23.5834 34.8532C23.836 34.1976 24.4486 33.769 25.1243 33.769C25.8189 33.769 26.4315 34.1913 26.6904 34.8595C26.7283 34.9666 26.7915 34.9666 26.8799 34.9666C28.3765 34.9666 29.8669 34.9666 31.3635 34.9666C31.7108 34.9666 31.9319 35.2187 31.8687 35.5339C31.8245 35.7608 31.6287 35.9058 31.3572 35.9058C30.6057 35.8994 29.8605 35.8994 29.1217 35.8994ZM25.8631 35.433C25.8695 35.0359 25.5537 34.7082 25.1495 34.7019C24.7454 34.6956 24.4044 35.0296 24.4044 35.4393C24.4044 35.8175 24.7328 36.1453 25.118 36.1516C25.5221 36.1642 25.8568 35.8301 25.8631 35.433Z"
          fill="#40196D"
        />
        <path
          d="M26.9177 30.8571C27.0755 30.3591 27.385 30.0125 27.8523 29.7982C28.6732 29.42 29.7278 29.8423 30.0499 30.6932C30.1004 30.8256 30.1573 30.8634 30.2962 30.8634C30.6561 30.8508 31.0098 30.8571 31.3697 30.8571C31.6729 30.8571 31.8749 31.0462 31.8686 31.3235C31.8686 31.5945 31.6665 31.7773 31.3697 31.7836C30.9908 31.7836 30.6119 31.7899 30.233 31.7836C30.1383 31.7836 30.1004 31.8151 30.0625 31.9034C29.8099 32.5463 29.33 32.9118 28.648 32.9686C27.9344 33.0316 27.385 32.7164 27.025 32.0924C27.0124 32.0735 26.9998 32.0546 26.9934 32.0357C26.9682 31.7962 26.8166 31.7773 26.6082 31.7773C24.3032 31.7836 21.992 31.7836 19.6743 31.7836C19.3775 31.7836 19.2197 31.6828 19.1502 31.4495C19.0618 31.147 19.2576 30.8697 19.5733 30.8571C19.6365 30.8571 19.6996 30.8571 19.7628 30.8571C22.0804 30.8571 24.3917 30.8571 26.7093 30.8571C26.7724 30.8571 26.8356 30.8571 26.9177 30.8571ZM29.2479 31.292C29.2353 30.8949 28.8943 30.5671 28.509 30.586C28.1049 30.5986 27.7765 30.939 27.7954 31.3361C27.8144 31.7458 28.1491 32.0546 28.5532 32.0357C28.9637 32.0168 29.2605 31.7017 29.2479 31.292Z"
          fill="#40196D"
        />
      </g>
      <defs>
        <clipPath id="clip0_126_105022">
          <rect
            width="12.75"
            height="11.1562"
            fill="white"
            transform="translate(19.125 25.9219)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

// const FilterRef = React.forwardRef((props, ref ) =>(
    
//   ))

export const HorizontalFilterBox = ({ children }) => {
  const currentScreen = useCurrentScreenQuery()
  
  const [display, setDisplay] = useState(false)
  const [counterSelectedItems, setSelectedItemsCount] = useState(0)

  const { hitsBreakPoint } = useMediaQueryRequest({
    screenResolver: '(max-width: 768px)',
  })
  const toggleFilter = () => {
    setDisplay(prev => !prev)
  }

  return (
    <>
      <>{hitsBreakPoint ? <ToggleIcon onToggle={toggleFilter} /> : null}</>
      <HorizontalFilter display={display?.toString()} >
        <FilterMenu display={display?.toString()} >
          <div className={'relative_block'} >
            {children}
          </div>
        </FilterMenu>
      </HorizontalFilter>
    </>
  )
}

const ChevronArrow = props => {
  return (
    <FlexAlign>
      <svg
        className={props.className}
        height={props.height}
        width={props.width}
        viewBox="0 0 266 438"
        xmlns="http://www.w3.org/2000/svg"
        onClick={props.onScroll}
      >
        <path
          d="m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z"
          fill={props.fill}
        />
      </svg>
    </FlexAlign>
  )
}

export const HorizontalScrollNavigator = ({
  children: filterChildren,
  displayChild,
}) => {
  const currentScreen = useCurrentScreenQuery()
  const blockRef = useRef<null | HTMLElement | HTMLDivElement>(null)

  const [counterSelectedItems, setSelectedItemsCount] = useState(0)

  const hitsBreakPoint = useMemo(
    () => ['sm', 'xs', 'tab', 'tabPortrait'].includes(currentScreen),
    [currentScreen]
  )

   const { hitsBreakPoint: tabscreen } = useMediaQueryRequest({
    screenResolver: '(max-width: 768px)',
  })

  const scrollableRef = useRef(null)
  const [isScrollVisible, setIsScrollVisible] = useState(hitsBreakPoint)
  const backArrowRef = useRef<null | HTMLElement | HTMLDivElement>(null)
  const [bringToFrontPosition, setBringTofrontPosition] = useState('relative')

  const onScroll = offSet => {
    if (scrollableRef) {
      scrollableRef.current.scrollLeft += offSet
    }
  }

  const checkScroll = () => {
    if (
      scrollableRef &&
      scrollableRef.current &&
      scrollableRef.current.scrollWidth > scrollableRef.current.clientWidth
    ) {
      setIsScrollVisible(true)
    } else {
      setIsScrollVisible(false)
    }
  }

  useEffect(() => {
    checkScroll()
  }, [])

  let index = 0
  useEffect(() => {
    if (scrollableRef.current) {
      if (scrollableRef?.current?.childNodes?.length > 2) {
        for (let i = 0; i < scrollableRef?.current?.childNodes?.length; i++) {
          const refElement = scrollableRef?.current?.childNodes[i]
          refElement.style.display = 'inline-block'
        }

        if (hitsBreakPoint) {
          scrollableRef.current.childNodes[
            scrollableRef.current.childNodes.length - 1
          ].style.display = 'none'
        } else {
          scrollableRef.current.childNodes[
            scrollableRef.current.childNodes.length - 1
          ].style.display = 'block'
        }
      }
    }
  }, [hitsBreakPoint])

  return (
    <>
      <HorizontalScroll currentScreen={currentScreen} px="1">
        <div className="innerFilter" ref={scrollableRef}>
          {filterChildren}
        </div>

        { tabscreen && (
          <ScrollArrows currentScreen={currentScreen}>
            <ChevronArrow
              ref={backArrowRef}
              width={'8px'}
              fill={'#777'}
              className="leftArrow arrows"
              onScroll={() => onScroll(-50)}
            />

            <ChevronArrow
              className={`rightArrow arrows`}
              width={'8px'}
              fill={'#777'}
              onScroll={() => {
                onScroll(50)
                backArrowRef?.current &&
                  backArrowRef?.current?.classList?.toggle('hidden')
              }}
            />
          </ScrollArrows>
        )}
      </HorizontalScroll>
    </>
  )
}



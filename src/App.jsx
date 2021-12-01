import React, { useCallback, useEffect, useState } from 'react'

import debounce from 'lodash.debounce'

import './App.scss'

import {
  Filters,
  Header,
  Loader,
  Workspace,
  LanguageSelector,
} from './components'

import { SALARY_MAX, SALARY_MIN } from './config'
import { EMPLOYMENT_TYPES, MEASURES, ADDITIONAL_FILTERS } from './const'
import { withDebug } from './utils/withDebug'

import { WorkspaceSizeContext, useTheme } from './contexts'

const getWorkspaceSize = () => {
  const workspace = document.getElementById('Workspace')

  return {
    width: workspace.offsetWidth - 25,
    height: workspace.offsetHeight,
  }
}

const sendTracking = (filters) => {
  window.dataLayer.push({ event: 'formSubmit', ...filters })
}

const updateQueryString = (filters) => {
  const { checkboxes } = filters

  const url = [
    [
      'types',
      Object.keys(checkboxes.types)
        .filter((key) => !!checkboxes.types[key].checked)
        .join(','),
    ],
    [
      'measures',
      Object.keys(checkboxes.measures)
        .filter((key) => !!checkboxes.measures[key].checked)
        .join(','),
    ],
    [
      'additionalFilters',
      Object.keys(checkboxes.additionalFilters)
        .filter((key) => !!checkboxes.additionalFilters[key].checked)
        .join(','),
    ],
    ['from', filters.from],
    ['to', filters.to],
  ].reduce((url, [k, v]) => {
    if (!v) {
      return url
    }

    url.searchParams.set(k, v)

    return url
  }, new URL(window.location))

  window.history.pushState({}, '', url)
}

const getInitialState = () => {
  const search = window.location.search
  const params = new URLSearchParams(search)

  const employmentTypes = Object.fromEntries(
    EMPLOYMENT_TYPES.map((type) => [type.name, 1]),
  )
  const measureTypes = Object.fromEntries(
    MEASURES.map((measure) => [measure.name, 1]),
  )
  const additionalFiltersTypes = Object.fromEntries(
    ADDITIONAL_FILTERS.map((filter) => [filter.name, 1]),
  )

  const types = (params.get('types') || 'uop-0')
    .split(',')
    .filter((type) => employmentTypes[type])
  const measures = (params.get('measures') || 'nettoMin')
    .split(',')
    .filter((type) => measureTypes[type])
  const additionalFilters = (params.get('additionalFilters') || '')
    .split(',')
    .filter((type) => additionalFiltersTypes[type])
  const from = parseInt(params.get('from')) || SALARY_MIN
  const to = parseInt(params.get('to')) || SALARY_MAX

  return {
    checkboxes: {
      types: Object.fromEntries(
        types.map((key) => [
          key,
          {
            data: EMPLOYMENT_TYPES.find(({ name }) => name === key),
            checked: true,
          },
        ]),
      ),
      measures: Object.fromEntries(
        measures.map((key) => [
          key,
          { data: MEASURES.find(({ name }) => name === key), checked: true },
        ]),
      ),
      additionalFilters: Object.fromEntries(
        additionalFilters.map((key) => [
          key,
          {
            data: ADDITIONAL_FILTERS.find(({ name }) => name === key),
            checked: true,
          },
        ]),
      ),
    },
    from: from < to ? from : to,
    to: from > to ? from : to,
  }
}

export const App = withDebug(function App() {
  const [filters, setFilters] = useState(getInitialState())

  const [isMobile, setMobile] = useState(window.innerWidth <= 640)
  const [size, setSize] = useState({})
  const [isSidebarVisible, setSidebarVisible] = useState(true)

  const { theme } = useTheme()

  const hideSidebarOnMobileAfterSubmit = useCallback(() => {
    if (isMobile) {
      setSidebarVisible(false)
    }
  }, [isMobile])

  useEffect(() => {
    updateQueryString(filters)
  }, [filters])

  const filtersSubmitted = useCallback(
    (filters) => {
      hideSidebarOnMobileAfterSubmit()

      setFilters(filters)

      sendTracking(filters)
    },
    [setFilters, hideSidebarOnMobileAfterSubmit],
  )

  const toogleSidebar = useCallback(() => {
    setSidebarVisible(!isSidebarVisible)
  }, [isSidebarVisible])

  useEffect(() => {
    setSize(getWorkspaceSize())
  }, [isSidebarVisible, isMobile])

  useEffect(() => {
    const resizeHandler = debounce(() => {
      const isMobileWidth = window.innerWidth <= 640

      if (isMobile !== isMobileWidth) {
        setMobile(isMobileWidth)
      }

      setSize(getWorkspaceSize())
    }, 400)

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return (
    <div className="App" data-theme={theme}>
      <Loader />
      <Header toogleSidebar={toogleSidebar} />
      <section className={'content'}>
        {isSidebarVisible && (
          <aside className={'sidebar'}>
            <Filters submitAction={filtersSubmitted} values={filters} />
            <LanguageSelector />
          </aside>
        )}
        <section
          className={`workspace ${isSidebarVisible ? '' : 'nosidebar'}`}
          id="Workspace">
          <WorkspaceSizeContext.Provider value={size}>
            <Workspace filters={filters} />
          </WorkspaceSizeContext.Provider>
        </section>
      </section>
    </div>
  )
})

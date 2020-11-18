import React from 'react'
import { View } from 'components'
import { Cell } from '../components/cell'
import { createStock, updateStock, deleteStock } from 'redux/actions'
import { RootState, Stock } from 'interfaces'
import { connect } from 'react-redux'


export interface TableProps {
  store: RootState,
  createStock: typeof createStock,
  updateStock: typeof updateStock,
  deleteStock: typeof deleteStock,
}

export interface TableState {

}

class Table extends React.Component<TableProps, TableState> {

  constructor(props: TableProps) {
    super(props)
    console.log('[Table] construnctor:', { props })
    this.state = {
      data: []
    }
  }

  renderCells = () => {
    return null
  }

  createStock = () => {
    this.props.createStock()
  }

  render() {
    return (
      <View className='table-container'>
        { this.renderCells()}
      </View>
    )
  }
}

// mapping the global app store to this component

const mapStateToProps = (store: RootState) => {
  return { store }
}

const mapDispatchToProps = { createStock, updateStock, deleteStock }

export default connect(mapStateToProps, mapDispatchToProps)(Table)
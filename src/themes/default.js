export default {
  tree: {
    base: {
      listStyle: 'none',
      backgroundColor: '#21252B',
      margin: 10,
      padding: 0,
      color: '#9DA5AB',
      fontFamily: 'lucida grande ,tahoma,verdana,arial,sans-serif',
      fontSize: '16px',
      height: '93vh',
      overflow: 'auto'
    },
    node: {
      base: {
        position: 'relative',
        marginLeft: '8px',
      },
      link: {
        cursor: 'pointer',
        position: 'relative',
        padding: '0px 5px',
        display: 'block'
      },
      toggle: {
        base: {
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'top',
          height: '24px',
          width: '24px'
        },
        wrapper: {
          position: 'absolute',
          top: '38%',
          left: '50%',
          margin: '-8px 0px 0px -13px',
          height: '14px'
        },
      },
      header: {
        base: {
          display: 'inline-block',
          verticalAlign: 'top',
          color: '#9DA5AB'
        },
        connector: {
          width: '2px',
          height: '12px',
          borderLeft: 'solid 2px black',
          borderBottom: 'solid 2px black',
          position: 'absolute',
          top: '0px',
          left: '-21px'
        },
        title: {
          lineHeight: '26px',
          verticalAlign: 'middle'
        }
      },
      subtree: {
        listStyle: 'none',
        paddingLeft: '19px'
      },
      loading: {
        color: '#E2C089'
      }
    }
  },
};

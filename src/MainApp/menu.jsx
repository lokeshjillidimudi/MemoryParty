import "./menu.css";

function Menu() {

    const menu=[
        {
        name:"Beer",
        list:[{
                name:"Beer",
            price:50
            },
            {
                name:"Bira",
            price:180
            },
            {
                name:"Budwiser",
            price:200
            }]
        },
        {
            name:"whisky",
            list:[{
                    name:"whisky1",
                price:120
                },
                {
                    name:"whisku2",
                price:180
                },
                {
                    name:"Budwiser",
                price:200
                }]
            }, {
                name:"rum",
                list:[{
                        name:"rum1",
                    price:120
                    },
                    {
                        name:"whisku2",
                    price:180
                    },
                    {
                        name:"Budwiser",
                    price:200
                    }]
                }, {
                    name:"whisky",
                    list:[{
                            name:"whisky1",
                        price:120
                        },
                        {
                            name:"whisku2",
                        price:180
                        },
                        {
                            name:"Budwiser",
                        price:200
                        }]
                    }, {
                        name:"whisky",
                        list:[{
                                name:"whisky1",
                            price:120
                            },
                            {
                                name:"whisku2",
                            price:180
                            },
                            {
                                name:"Budwiser",
                            price:200
                            }]
                        }, {
                            name:"whisky",
                            list:[{
                                    name:"whisky1",
                                price:120
                                },
                                {
                                    name:"whisku2",
                                price:180
                                },
                                {
                                    name:"Budwiser",
                                price:200
                                }]
                            }, {
                                name:"whisky",
                                list:[{
                                        name:"whisky1",
                                    price:120
                                    },
                                    {
                                        name:"whisku2",
                                    price:180
                                    },
                                    {
                                        name:"Budwiser",
                                    price:200
                                    }]
                                }, {
                                    name:"whisky",
                                    list:[{
                                            name:"whisky1",
                                        price:120
                                        },
                                        {
                                            name:"whisku2",
                                        price:180
                                        },
                                        {
                                            name:"Budwiser",
                                        price:200
                                        }]
                                    }
    ]

    const Bearsitems=({items})=>{
        return (
          <ol>
            
                 {items.map((item, index) => (
                    <li><div className="item-details">
                    <span>{item.name}
                        </span>
                    <span>{item.price}</span>
                    </div></li>
                  ))}
            
          </ol>  
        )
    }

  return (
    <div className="Menu">
        <div className="menu">Menu</div>
        <div className="bear-section">
                  {menu.map((item, index) => (
                    <>
                    <div className="title">{item.name}</div>
                   <div className="items">
                        <div>
                            <Bearsitems items={item.list}/>
                        </div>
                   </div>
                    </>  
                  ))}
        </div>
    </div>
  );
}

export default Menu;

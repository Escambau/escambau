import { BackgroundGradiente, List, Modal } from "./modalStyle";
import { IoMdClose } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
import { Card } from "./cardStyle";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { UserContext } from "../../contexts/UserContext";
import api from "../../services/api";

const TradeModal = () => {
  const {
    filterProductsUser,
    setUserProductList,
    isSelected,
    isTradeModal,
    setIsTradeModal,
    setIsModalConfirmTrade,
    userProductList,
  } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const getProducts = async () => {
      api.get(`/products?userId=${user?.id}`).then((response) => {
        setUserProductList(response.data);
      });
    };
    getProducts();
  }, []);

  return (
    <>
      {isTradeModal && (
        <BackgroundGradiente>
          <Modal>
            <div className="container">
              <h3 className="title">Selecione o produto que será trocado</h3>
              <button onClick={() => setIsTradeModal(false)}>
                <IoMdClose />
              </button>
            </div>

            {userProductList.length > 0 ? (
              <>
                <List>
                  {userProductList?.map((card) => {
                    return (
                      <Card
                        key={card.id}
                        onClick={() => filterProductsUser(card)}
                      >
                        <div>
                          <img src={card.image} alt="" />

                          <div>
                            <div>
                              <h4>{card.category}</h4>
                              <h3>{card.name}</h3>
                            </div>
                            <section>
                              {window.innerWidth > 500 && (
                                <p>Preço estipulado:</p>
                              )}
                              <span>R$ {Number(card.price).toFixed(2)}</span>
                            </section>
                          </div>
                        </div>

                        <label className="containerCheckbox">
                          {isSelected(card) ? (
                            <span className="checkmarkFalse" />
                          ) : (
                            <FiCheck className="checkmarkTrue" />
                          )}
                        </label>
                      </Card>
                    );
                  })}
                </List>
                <div className="containerBtnTrade">
                  <button
                    className="btnTrade"
                    onClick={() => setIsModalConfirmTrade(true)}
                  >
                    Solicitar Troca
                  </button>
                </div>
              </>
            ) : (
              <h2 className="emptyList">
                Você ainda não adicionou nenhum produto
              </h2>
            )}
          </Modal>
        </BackgroundGradiente>
      )}
    </>
  );
};

export default TradeModal;

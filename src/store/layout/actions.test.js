import {Types, Creators} from './index';

describe('Layout actions', () => {

    describe('Actions Type', () => {
        it('should be return SHOW_MESSAGE', () => {
          expect(Types.SHOW_MESSAGE).toEqual('SHOW_MESSAGE');
        })

        it('should be return HIDE_MESSAGE', () => {
          expect(Types.HIDE_MESSAGE).toEqual('HIDE_MESSAGE');
        })
    });

    describe( 'Action Creators', () => {

      it('should be return action creator showMessage {type : SHOW_MESSAGE} ', () => {
        expect(Creators.showMessage()).toEqual({type:Types.SHOW_MESSAGE});
      });

      it('should be return action creator hideMessage { type: HIDE_MESSAGE }', () => {
        expect(Creators.hideMessage()).toEqual({type:Types.HIDE_MESSAGE});
      })


    })


})


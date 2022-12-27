import { RootState } from '@app/root-store';
import { createSelector } from '@reduxjs/toolkit';

const selectSlice = (state: RootState) => state.todos;

export const selectTodos = createSelector(selectSlice, (state) => state.todos);

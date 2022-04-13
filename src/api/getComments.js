export const getCommentsApi = async () => {
  return [
    {
      id: "1",
      comment: "First comment",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      comment: "Second comment",
      username: "John",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      comment: "First comment first child",
      username: "John",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      comment: "Second comment second child",
      username: "John",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createCommentApi = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    comment: text,
    userId: "1",
    parentId,
    username: "Richard",
    createdAt: new Date().toISOString(),
  };
};

export const editCommentApi = async (text) => {
  return { text };
};

export const deleteCommentAPi = async () => {
  return {};
};
